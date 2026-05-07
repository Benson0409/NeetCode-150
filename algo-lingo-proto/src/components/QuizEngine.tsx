import { useState } from 'react';
import type { QuizQuestion } from '../types';
import { CheckCircle2, XCircle, ChevronRight, RefreshCw } from 'lucide-react';

interface QuizEngineProps {
  questions: QuizQuestion[];
  onComplete: () => void;
}

export function QuizEngine({ questions, onComplete }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // 如果沒有題目
  if (!questions || questions.length === 0) {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
        <p className="text-slate-500 mb-4">這題目前還沒有專屬問答題庫喔！</p>
        <button
          onClick={onComplete}
          className="bg-[#aa3bff] text-white px-6 py-2 rounded-lg font-bold"
        >
          直接通關
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (selectedOption !== currentQ.answer) {
      // 答錯需要重試同一題
      setSelectedOption(null);
      setIsAnswered(false);
      setShowExplanation(false);
      return;
    }

    if (isLastQuestion) {
      onComplete();
    } else {
      setCurrentIndex(curr => curr + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowExplanation(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          <span>🧠</span> 觀念測驗
        </h3>
        <span className="text-sm font-bold text-slate-400">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <div className="mb-6">
        <p className="text-lg font-medium text-slate-800 leading-relaxed">
          {currentQ.question}
        </p>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {currentQ.options.map((opt, idx) => {
          let stateStyle = "border-slate-200 hover:border-[#aa3bff] hover:bg-slate-50";
          
          if (isAnswered) {
            if (idx === currentQ.answer) {
              stateStyle = "border-emerald-500 bg-emerald-50 text-emerald-800";
            } else if (idx === selectedOption) {
              stateStyle = "border-rose-500 bg-rose-50 text-rose-800";
            } else {
              stateStyle = "border-slate-100 bg-slate-50 opacity-50";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              className={`p-4 rounded-xl border-2 text-left transition-all ${stateStyle}`}
            >
              <div className="flex items-center justify-between">
                <span>{opt}</span>
                {isAnswered && idx === currentQ.answer && <CheckCircle2 className="text-emerald-500" size={20} />}
                {isAnswered && idx === selectedOption && idx !== currentQ.answer && <XCircle className="text-rose-500" size={20} />}
              </div>
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className={`mt-6 p-4 rounded-xl border ${selectedOption === currentQ.answer ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'} animate-in fade-in slide-in-from-bottom-2`}>
          <p className="text-sm font-medium mb-1 text-slate-700">
            {selectedOption === currentQ.answer ? '🎉 答對了！' : '😅 答錯了，再想想！'}
          </p>
          <p className="text-sm text-slate-600">{currentQ.explanation}</p>
        </div>
      )}

      <button
        onClick={handleNext}
        disabled={!isAnswered}
        className={`mt-6 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform ${
          !isAnswered 
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
            : selectedOption === currentQ.answer
              ? 'bg-[#aa3bff] text-white active:scale-95 shadow-lg shadow-[#aa3bff]/30'
              : 'bg-rose-500 text-white active:scale-95 shadow-lg shadow-rose-500/30'
        }`}
      >
        {!isAnswered ? '請選擇一個答案' 
          : selectedOption === currentQ.answer 
            ? (isLastQuestion ? '完成測驗' : '下一題') 
            : <><RefreshCw size={18} /> 重新回答本題</>}
        {isAnswered && selectedOption === currentQ.answer && <ChevronRight size={20} />}
      </button>
    </div>
  );
}
