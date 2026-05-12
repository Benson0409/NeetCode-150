import { useState, useEffect } from 'react';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuizEngine } from '../components/QuizEngine';
import { CodeVisualizer } from '../components/visualization/CodeVisualizer';
import type { ProblemData, QuizQuestion } from '../types';
import questionsPool from '../data/questions_pool.json';

interface ProblemProps {
  data: ProblemData;
  onBack: () => void;
  onMarkCompleted: (id: string) => void;
  isCompleted: boolean;
}

export function Problem({ data, onBack, onMarkCompleted, isCompleted }: ProblemProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'quiz' | 'animation'>('animation');
  const [animationData, setAnimationData] = useState<any>(null);

  // Load questions for the current problem from the pool
  const problemQuestions = (questionsPool as { problemId: string, questions: QuizQuestion[] }[])
    .find(q => q.problemId === data.id)?.questions || [];

  // Randomize questions order and pick 10
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  useEffect(() => {
    // Load animation data if exists
    const loadAnim = async () => {
      try {
        const mod = await import(`../data/animations/${data.id}_animation.json`);
        setAnimationData(mod.default || mod);
        setActiveTab('animation');
      } catch (e) {
        setAnimationData(null);
        setActiveTab('quiz'); // fallback to quiz if no animation
      }
    };
    loadAnim();

    // Group questions by difficulty
    const easyPool = problemQuestions.filter(q => q.difficulty === 'Easy');
    const mediumPool = problemQuestions.filter(q => q.difficulty === 'Medium');
    const hardPool = problemQuestions.filter(q => q.difficulty === 'Hard');

    // Helper to shuffle and pick N
    const pickRandom = (pool: QuizQuestion[], n: number) => {
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, n);
    };

    // Distribution: 40% Easy (6), 40% Medium (6), 20% Hard (3)
    let selectedEasy = pickRandom(easyPool, 6);
    let selectedMedium = pickRandom(mediumPool, 6);
    let selectedHard = pickRandom(hardPool, 3);

    // Combine and shuffle final set
    const finalSet = [...selectedEasy, ...selectedMedium, ...selectedHard].sort(() => Math.random() - 0.5);
    
    // If we don't have enough (e.g. some pools were small), fallback to random from full pool
    if (finalSet.length < 15) {
      const remainingNeeded = 15 - finalSet.length;
      const alreadyPickedIds = new Set(finalSet.map(q => q.id));
      const poolRemaining = problemQuestions.filter(q => !alreadyPickedIds.has(q.id));
      const additional = pickRandom(poolRemaining, remainingNeeded);
      setQuestions([...finalSet, ...additional].sort(() => Math.random() - 0.5));
    } else {
      setQuestions(finalSet);
    }
    
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
    <div className="w-full min-h-screen bg-slate-50 flex flex-col p-4 md:p-8 lg:p-12 xl:p-16 font-sans text-slate-800">
      
      {/* 頭部區塊：返回按鈕與 Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-1 text-slate-500 font-medium hover:text-slate-800 transition-colors w-fit"
        >
          <ChevronLeft size={20} /> 返回地圖
        </button>

        {/* Tabs */}
        <div className="flex bg-slate-200/50 p-1 rounded-xl w-full md:w-[400px]">
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'quiz' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            📝 題目與測驗 (Quiz)
          </button>
          <button
            onClick={() => setActiveTab('animation')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'animation' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            disabled={!animationData}
            title={!animationData ? "此題目尚未提供動畫" : ""}
          >
            ▶️ 動畫解析 (Animation)
          </button>
        </div>
      </div>

      {activeTab === 'quiz' ? (
        <div className="flex flex-col lg:flex-row gap-8 flex-1">
        {/* 雙欄佈局：左側資訊，右側測驗 */}
        
        {/* 左側：題目資訊 */}
        <div className="flex-1 lg:flex-[2] flex flex-col gap-6">
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

        {/* 右側：互動區 */}
        <div className="flex-1 lg:flex-[3] lg:sticky lg:top-12 h-fit flex flex-col gap-4">
          
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
      ) : (
        <div className="flex-1 flex flex-col w-full animate-in fade-in duration-300">
          <div className="mb-4">
            <h1 className="text-2xl font-extrabold text-slate-900">{data.title} - 動畫解析</h1>
            <p className="text-slate-500 text-sm mt-1">觀察程式碼執行與資料結構的變化</p>
          </div>
          {animationData ? (
            <CodeVisualizer data={animationData} />
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-400">
              載入動畫中...
            </div>
          )}
        </div>
      )}
    </div>
  );
}
