import { useState, useEffect } from 'react';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuizEngine } from '../components/QuizEngine';
import type { ProblemData, QuizQuestion } from '../types';
import questionsData from '../data/questions.json';

interface ProblemProps {
  data: ProblemData;
  onBack: () => void;
  onMarkCompleted: (id: string) => void;
  isCompleted: boolean;
}

export function Problem({ data, onBack, onMarkCompleted, isCompleted }: ProblemProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  // Load questions for the current problem
  const problemQuestions = (questionsData as { problemId: string, questions: QuizQuestion[] }[])
    .find(q => q.problemId === data.id)?.questions || [];

  // Randomize questions order
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  useEffect(() => {
    setQuestions([...problemQuestions].sort(() => Math.random() - 0.5));
    setIsSuccess(false);
  }, [data.id]);

  const handleComplete = () => {
    setIsSuccess(true);
    onMarkCompleted(data.id);
    
    // 觸發撒花特效
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#aa3bff', '#10b981', '#f59e0b']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#aa3bff', '#10b981', '#f59e0b']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <div className="max-w-6xl mx-auto min-h-screen bg-slate-50 flex flex-col p-4 md:p-8 font-sans text-slate-800">
      
      {/* 導覽列 */}
      <button 
        onClick={onBack}
        className="flex items-center gap-1 text-slate-500 font-medium mb-6 hover:text-slate-800 transition-colors w-fit"
      >
        <ChevronLeft size={20} /> 返回地圖
      </button>

      {/* 雙欄佈局：左側資訊，右側測驗 */}
      <div className="flex flex-col lg:flex-row gap-8 flex-1">
        
        {/* 左側：題目資訊 */}
        <div className="flex-1 flex flex-col gap-6 lg:max-w-xl">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="text-[#aa3bff] font-bold tracking-wider text-sm uppercase">Problem Info</div>
              {isCompleted && (
                <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-xs font-bold border border-emerald-200">
                  <CheckCircle2 size={14} /> 已通關
                </span>
              )}
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900">{data.title}</h1>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-3 border-b pb-2">Description</h3>
            <p className="text-slate-700 text-sm font-medium leading-relaxed mb-6 whitespace-pre-wrap">
              {data.description}
            </p>

            {data.examples && (
              <>
                <h3 className="font-bold text-slate-800 mb-3 border-b pb-2">Examples</h3>
                <div className="bg-slate-900 text-emerald-400 p-4 rounded-xl font-mono text-sm whitespace-pre-wrap leading-relaxed shadow-inner overflow-x-auto">
                  {data.examples}
                </div>
              </>
            )}

            {data.constraints && (
              <div className="mt-6">
                <h3 className="font-bold text-slate-800 mb-3 border-b pb-2">Constraints</h3>
                <p className="text-slate-600 text-sm whitespace-pre-wrap leading-relaxed">
                  {data.constraints}
                </p>
              </div>
            )}
          </div>

          {data.concept && (
            <div className="bg-[#aa3bff]/5 border border-[#aa3bff]/20 rounded-2xl p-6">
              <h3 className="font-bold text-[#aa3bff] mb-3 border-b border-[#aa3bff]/20 pb-2">💡 解題概念 (Concept)</h3>
              <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">
                {data.concept}
              </p>
            </div>
          )}
        </div>

        {/* 右側：互動測驗區 */}
        <div className="flex-1 lg:max-w-lg lg:sticky lg:top-8 h-fit">
          {!isSuccess ? (
            <QuizEngine questions={questions} onComplete={handleComplete} />
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-lg animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-emerald-500" size={40} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">恭喜通關！</h2>
              <p className="text-slate-500 mb-8">你已經完全掌握這題的核心概念了。</p>
              
              <div className="flex flex-col gap-3">
                <button
                  onClick={onBack}
                  className="w-full py-3 rounded-xl font-bold bg-[#aa3bff] text-white shadow-lg shadow-[#aa3bff]/30 active:scale-95 transition-transform"
                >
                  回到關卡地圖
                </button>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="w-full py-3 rounded-xl font-bold bg-slate-100 text-slate-600 active:scale-95 transition-transform"
                >
                  再測驗一次
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
