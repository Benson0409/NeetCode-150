import { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, RotateCcw } from 'lucide-react';
import { ArrayView, SetView, MapView } from './DataStructures';
import { motion } from 'framer-motion';

interface AnimationState {
  nums?: any[];
  seen?: any[];
  map?: Record<string, any>;
  pointer?: number | null;
  num?: any | null;
  checkTarget?: any | null;
  checkKey?: string | null;
  returnValue?: any | null;
}

interface AnimationStep {
  line: number;
  state: AnimationState;
  explanation: string;
}

interface AnimationData {
  code: string[];
  steps: AnimationStep[];
}

interface CodeVisualizerProps {
  data: AnimationData;
}

export function CodeVisualizer({ data }: CodeVisualizerProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const steps = data.steps;
  const currentStep = steps[currentStepIndex];

  useEffect(() => {
    let timer: number;
    if (isAutoPlay) {
      timer = window.setTimeout(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= steps.length - 1) return 0; // Loop back to start
          return prev + 1;
        });
      }, 1500); // 1.5 seconds per step
    }
    return () => clearTimeout(timer);
  }, [isAutoPlay, currentStepIndex, steps.length]);

  const handleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const handlePrev = () => {
    setCurrentStepIndex((prev) => Math.max(0, prev - 1));
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentStepIndex((prev) => Math.min(steps.length - 1, prev + 1));
    setIsAutoPlay(false);
  };

  // 處理 backticks `code` 的渲染
  const renderExplanation = (text: string) => {
    const parts = text.split(/`([^`]+)`/g);
    return parts.map((part, i) => 
      i % 2 === 1 ? (
        <code key={i} className="bg-[#aa3bff]/10 text-[#aa3bff] font-bold px-1.5 py-0.5 rounded font-mono text-sm mx-0.5">
          {part}
        </code>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <div className="flex flex-col gap-6 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm animate-in fade-in duration-300">
      
      {/* 頂部標題 */}
      <div className="flex items-center justify-between border-b pb-4">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <span className="bg-[#aa3bff] text-white p-1.5 rounded-lg">
            <Play size={16} fill="currentColor" />
          </span>
          Code Execution Animation
        </h3>
        <div className="text-sm font-mono text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
          Step {currentStepIndex + 1} / {steps.length}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* 左側：程式碼區 */}
        <div className="flex-1 bg-[#1e1e1e] rounded-xl overflow-hidden shadow-inner flex flex-col">
          <div className="bg-[#2d2d2d] px-4 py-2 text-xs font-mono text-slate-400 border-b border-[#3d3d3d] flex justify-between">
            <span>solution.py</span>
            <span>{currentStepIndex + 1} / {steps.length}</span>
          </div>
          <div className="p-4 font-mono text-sm overflow-x-auto leading-relaxed">
            {data.code.map((line, idx) => {
              const isActive = currentStep.line === idx;
              return (
                <div 
                  key={idx} 
                  className={`px-4 py-0.5 flex gap-4 transition-colors duration-300 rounded ${isActive ? 'bg-[#aa3bff]/30 shadow-[inset_3px_0_0_0_#aa3bff]' : ''}`}
                >
                  <span className="text-slate-500 select-none w-4 text-right">{idx + 1}</span>
                  <span className={`whitespace-pre transition-all duration-300 ${isActive ? 'text-white font-bold scale-[1.02] origin-left inline-block' : 'text-slate-300'}`}>{line}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 右側：視覺化與解說 */}
        <div className="flex-1 flex flex-col gap-6">
          {/* 解說方塊 */}
          <motion.div 
            key={currentStepIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#aa3bff]/10 border border-[#aa3bff]/30 p-4 rounded-xl text-slate-700 min-h-[80px] flex items-center shadow-sm text-sm md:text-base leading-relaxed"
          >
            <span className="text-lg mr-2 shrink-0">💡</span>
            <div>{renderExplanation(currentStep.explanation)}</div>
          </motion.div>

          {/* 資料結構視覺化 */}
          <div className="flex-1 bg-slate-50 rounded-xl border border-slate-100 p-6 flex flex-col items-center gap-8 justify-center min-h-[300px] overflow-hidden">
            {currentStep.state.nums && (
              <ArrayView data={currentStep.state.nums} pointerIndex={currentStep.state.pointer ?? null} />
            )}
            
            {currentStep.state.seen && (
              <SetView items={currentStep.state.seen} checkTarget={currentStep.state.checkTarget ?? null} />
            )}

            {currentStep.state.map && (
              <MapView data={currentStep.state.map} checkKey={currentStep.state.checkKey ?? null} />
            )}
            
            {/* Return Value Overlay */}
            {currentStep.state.returnValue !== undefined && currentStep.state.returnValue !== null && (
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`absolute p-4 rounded-xl font-bold text-xl shadow-xl z-10 border-4 ${currentStep.state.returnValue ? 'bg-emerald-100 text-emerald-700 border-emerald-400' : 'bg-rose-100 text-rose-700 border-rose-400'}`}
              >
                Return {currentStep.state.returnValue ? 'True' : 'False'}
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      {/* 底部控制列與進度條 */}
      <div className="flex flex-col gap-4 mt-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={handlePrev} 
            disabled={currentStepIndex === 0} 
            className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors font-medium disabled:opacity-50"
          >
            <SkipBack size={18} /> 上一步
          </button>
          
          <button 
            onClick={handleAutoPlay} 
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold shadow-md transition-all active:scale-95 ${
              isAutoPlay 
                ? 'bg-rose-500 text-white shadow-rose-500/30 hover:bg-rose-600' 
                : 'bg-[#aa3bff] text-white shadow-[#aa3bff]/30 hover:bg-[#922ce0]'
            }`}
          >
            {isAutoPlay ? (
              <><Pause size={18} fill="currentColor" /> 暫停播放</>
            ) : (
              <><RotateCcw size={18} /> 自動播放 (循環)</>
            )}
          </button>
          
          <button 
            onClick={handleNext} 
            disabled={currentStepIndex === steps.length - 1 && !isAutoPlay} 
            className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors font-medium disabled:opacity-50"
          >
            下一步 <SkipForward size={18} />
          </button>
        </div>

        {/* 進度條 */}
        <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden w-full">
          <div 
            className="h-full bg-[#aa3bff] transition-all duration-300 ease-linear"
            style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
