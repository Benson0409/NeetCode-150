import { useState } from 'react';
import { StepVisualizer } from './components/StepVisualizer';
import { CodePuzzle } from './components/CodePuzzle';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

const problemSteps = [
  { description: "初始狀態：我們有一個 Array 與一個空的 Hash Set", state: { nums: [1,2,3,1], set: [], pointer: -1 } },
  { description: "指針走到索引 0，數字是 1。1 不在 Set 中。", state: { nums: [1,2,3,1], set: [], pointer: 0 } },
  { description: "把 1 加入 Set 中。", state: { nums: [1,2,3,1], set: [1], pointer: 0 } },
  { description: "指針走到索引 1，數字是 2。2 不在 Set 中。", state: { nums: [1,2,3,1], set: [1], pointer: 1 } },
  { description: "把 2 加入 Set 中。", state: { nums: [1,2,3,1], set: [1, 2], pointer: 1 } },
  { description: "指針走到索引 2，數字是 3。3 不在 Set 中。", state: { nums: [1,2,3,1], set: [1, 2], pointer: 2 } },
  { description: "把 3 加入 Set 中。", state: { nums: [1,2,3,1], set: [1, 2, 3], pointer: 2 } },
  { description: "指針走到索引 3，數字是 1。1 已經在 Set 中了！", state: { nums: [1,2,3,1], set: [1, 2, 3], pointer: 3, foundDuplicate: true } },
  { description: "發現重複元素，直接返回 True 結束。", state: { nums: [1,2,3,1], set: [1, 2, 3], pointer: 3, foundDuplicate: true } },
];

const initialBlocks = [
  { id: '1', code: 'return False' },
  { id: '2', code: 'if num in seen:' },
  { id: '3', code: 'for num in nums:' },
  { id: '4', code: 'return True' },
  { id: '5', code: 'seen.add(num)' },
  { id: '6', code: 'seen = set()' },
];

const correctOrderIds = ['6', '3', '2', '4', '5', '1'];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [blocks, setBlocks] = useState(initialBlocks);
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const checkPuzzle = () => {
    const currentOrder = blocks.map(b => b.id);
    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrderIds)) {
      setIsSuccess(true);
    } else {
      alert('順序似乎不太對喔，再想想看！');
    }
  };

  const resetPuzzle = () => {
    setBlocks(initialBlocks);
    setIsSuccess(false);
    setShowPuzzle(false);
    setCurrentStep(0);
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-slate-50 flex flex-col pt-12 pb-24 px-4 font-sans text-slate-800">
      
      <div className="mb-6">
        <div className="text-[#aa3bff] font-bold tracking-wider text-sm mb-1 uppercase">AlgoLingo Prototype</div>
        <h1 className="text-2xl font-extrabold mb-1 text-slate-900">217. Contains Duplicate</h1>
        <h2 className="text-lg font-bold mb-4 text-slate-500">存在重複元素</h2>
        
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm mb-4">
          <p className="text-slate-700 text-sm mb-3 font-medium leading-relaxed">
            Given an integer array <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">nums</code>, return <code className="bg-slate-100 px-1 py-0.5 rounded text-[#aa3bff]">true</code> if any value appears at least twice in the array, and return <code className="bg-slate-100 px-1 py-0.5 rounded text-[#aa3bff]">false</code> if every element is distinct.
          </p>
          <div className="h-[1px] w-full bg-slate-100 mb-3"></div>
          <p className="text-slate-600 text-sm leading-relaxed">
            給定一個整數陣列 nums，如果任一值在陣列中出現至少兩次，回傳 true；如果陣列中每個元素都不相同，則回傳 false。
          </p>
        </div>

        <div className="bg-[#1e1e2e] rounded-xl p-4 shadow-sm mb-4 border border-slate-800">
          <div className="text-xs text-slate-400 font-mono mb-2 uppercase tracking-widest">Example</div>
          <div className="text-emerald-400 font-mono text-sm mb-1">Input: <span className="text-white">nums = [1,2,3,1]</span></div>
          <div className="text-emerald-400 font-mono text-sm">Output: <span className="text-[#f38ba8]">true</span></div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed border-l-4 border-[#aa3bff] pl-3 py-1 bg-[#aa3bff]/5 rounded-r-lg">
          <strong>解題概念：</strong>利用 Hash Set 的 O(1) 查找特性來記錄出現過的元素。如果在 Set 中找到當前元素，代表有重複。
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-8">
        {/* 動畫互動區 */}
        {!showPuzzle ? (
          <div className="flex flex-col gap-4">
            <StepVisualizer step={problemSteps[currentStep]} />
            
            <div className="flex justify-between mt-2">
              <button
                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className="px-4 py-3 rounded-xl font-medium flex items-center gap-2 bg-white text-slate-700 border border-slate-200 disabled:opacity-50 active:scale-95 transition-transform cursor-pointer"
              >
                <ChevronLeft size={18} /> 上一步
              </button>
              
              {currentStep < problemSteps.length - 1 ? (
                <button
                  onClick={() => setCurrentStep(prev => Math.min(problemSteps.length - 1, prev + 1))}
                  className="px-6 py-3 rounded-xl font-medium flex items-center gap-2 bg-[#aa3bff] text-white disabled:opacity-50 active:scale-95 shadow-md shadow-[#aa3bff]/20 transition-transform cursor-pointer"
                >
                  下一步 <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  onClick={() => setShowPuzzle(true)}
                  className="px-6 py-3 rounded-xl font-medium flex items-center gap-2 bg-[#10b981] text-white active:scale-95 shadow-md shadow-emerald-500/20 transition-transform animate-pulse cursor-pointer"
                >
                  邏輯拼圖 <ChevronRight size={18} />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CodePuzzle blocks={blocks} onOrderChange={setBlocks} />
            
            {!isSuccess ? (
              <button
                onClick={checkPuzzle}
                className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-[#aa3bff] text-white active:scale-95 shadow-lg shadow-[#aa3bff]/30 transition-transform cursor-pointer"
              >
                提交答案
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-[#10b981] text-white shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 size={22} /> 恭喜完成！
                </div>
                <button
                  onClick={resetPuzzle}
                  className="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 bg-slate-200 text-slate-700 active:scale-95 transition-transform cursor-pointer"
                >
                  重新挑戰
                </button>
              </div>
            )}
            
            <button
              onClick={() => setShowPuzzle(false)}
              className="mt-2 text-slate-500 text-sm hover:text-slate-700 font-medium cursor-pointer"
            >
              返回看動畫
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
