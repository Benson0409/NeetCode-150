import { motion } from 'framer-motion';

interface Step {
  description: string;
  state: {
    nums: number[];
    set: number[];
    pointer: number;
    foundDuplicate?: boolean;
  };
}

export function StepVisualizer({ step }: { step: Step }) {
  const { nums, set, pointer, foundDuplicate } = step.state;

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col gap-6">
      <div className="text-center text-lg font-medium text-slate-800 h-14 flex items-center justify-center">
        {step.description}
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Array Visualization */}
        <div className="flex flex-col items-center">
          <div className="text-sm font-semibold text-slate-500 mb-2">Array (nums)</div>
          <div className="flex gap-2">
            {nums.map((num, i) => (
              <div key={i} className="relative">
                <motion.div
                  layout
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold border-2 transition-colors ${
                    pointer === i
                      ? foundDuplicate
                        ? 'bg-red-100 border-red-500 text-red-600'
                        : 'bg-[#f0d9ff] border-[#aa3bff] text-[#aa3bff]'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  {num}
                </motion.div>
                {pointer === i && (
                  <motion.div
                    layoutId="pointer"
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[#aa3bff]"
                  >
                    ▲
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Set Visualization */}
        <div className="flex flex-col items-center min-w-[150px]">
          <div className="text-sm font-semibold text-slate-500 mb-2">Hash Set (seen)</div>
          <div className="flex flex-wrap gap-2 justify-center border-2 border-dashed border-slate-300 rounded-xl p-4 min-h-[80px] w-full">
            {set.map((num) => (
              <motion.div
                key={num}
                layout
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-sm ${
                  foundDuplicate && pointer >= 0 && nums[pointer] === num
                    ? 'bg-red-500'
                    : 'bg-[#aa3bff]'
                }`}
              >
                {num}
              </motion.div>
            ))}
            {set.length === 0 && (
              <div className="text-slate-400 text-sm italic flex items-center">Empty</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
