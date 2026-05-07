import { useState } from 'react';
import chapter1Data from '../data/chapter1.json';
import type { ProblemData } from '../types';
import { useAppStore } from '../store/useAppStore';
import { CheckCircle2, X } from 'lucide-react';

interface HomeProps {
  onSelectProblem: (id: string) => void;
}

export function Home({ onSelectProblem }: HomeProps) {
  const problems = chapter1Data as ProblemData[];
  const { isProblemCompleted } = useAppStore();
  const [selectedCompletedProblem, setSelectedCompletedProblem] = useState<ProblemData | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-emerald-500 bg-emerald-50 border-emerald-200';
      case 'Medium':
        return 'text-amber-500 bg-amber-50 border-amber-200';
      case 'Hard':
        return 'text-rose-500 bg-rose-50 border-rose-200';
      default:
        return 'text-slate-500 bg-slate-50 border-slate-200';
    }
  };

  const handleProblemClick = (problem: ProblemData) => {
    if (isProblemCompleted(problem.id)) {
      setSelectedCompletedProblem(problem);
    } else {
      onSelectProblem(problem.id);
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-slate-50 flex flex-col pt-12 pb-24 px-4 font-sans text-slate-800 relative">
      <div className="mb-8">
        <div className="text-[#aa3bff] font-bold tracking-wider text-sm mb-1 uppercase">Chapter 1</div>
        <h1 className="text-3xl font-extrabold mb-2 text-slate-900">Arrays & Hashing</h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          基礎的資料結構與雜湊表應用，是所有演算法的基石。請按照順序挑戰！
        </p>
      </div>

      <div className="flex flex-col gap-4 relative">
        {/* 連接線 (視覺效果) */}
        <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-slate-200 z-0"></div>

        {problems.map((problem, index) => {
          const isCompleted = isProblemCompleted(problem.id);
          return (
            <div 
              key={problem.id}
              onClick={() => handleProblemClick(problem)}
              className="relative z-10 flex items-center gap-4 cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-sm transition-transform group-hover:scale-110 group-active:scale-95 ${
                isCompleted 
                  ? 'bg-emerald-500 text-white shadow-emerald-500/40 border-2 border-emerald-400' 
                  : `border-2 bg-white ${getDifficultyColor(problem.difficulty)}`
              }`}>
                {isCompleted ? <CheckCircle2 size={24} /> : index + 1}
              </div>
              <div className={`flex-1 p-4 rounded-2xl shadow-sm border transition-colors ${
                isCompleted ? 'bg-emerald-50/50 border-emerald-200' : 'bg-white border-slate-200 group-hover:border-[#aa3bff]'
              }`}>
                <h3 className="font-bold text-slate-800 mb-1">{problem.title}</h3>
                <div className="flex gap-2 items-center">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                  {isCompleted && <span className="text-[10px] font-bold text-emerald-600">COMPLETED</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 已通關複習彈出視窗 */}
      {selectedCompletedProblem && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-sm p-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedCompletedProblem(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full p-1"
            >
              <X size={20} />
            </button>
            <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-xl font-bold text-center text-slate-800 mb-2">
              {selectedCompletedProblem.title}
            </h2>
            <p className="text-sm text-slate-500 text-center mb-6">
              這題你已經通關囉！要再複習一次核心觀念測驗嗎？
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedCompletedProblem(null)}
                className="flex-1 py-3 rounded-xl font-bold bg-slate-100 text-slate-600"
              >
                先不要
              </button>
              <button
                onClick={() => {
                  onSelectProblem(selectedCompletedProblem.id);
                  setSelectedCompletedProblem(null);
                }}
                className="flex-1 py-3 rounded-xl font-bold bg-[#aa3bff] text-white shadow-lg shadow-[#aa3bff]/30"
              >
                前往複習
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
