import { motion, AnimatePresence } from 'framer-motion';

interface ArrayViewProps {
  data: number[];
  pointerIndex: number | null;
}

export function ArrayView({ data, pointerIndex }: ArrayViewProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Array (nums)</div>
      <div className="flex gap-2 pt-10 pb-4 px-4 bg-slate-100 rounded-xl overflow-x-auto min-w-[200px] justify-center relative">
        {data.map((item, index) => {
          const isPointer = pointerIndex === index;
          return (
            <div key={index} className="flex flex-col items-center gap-2 relative">
              <motion.div 
                layout
                className={`w-12 h-12 flex items-center justify-center rounded-lg text-lg font-bold shadow-sm border-2 transition-colors ${
                  isPointer ? 'bg-[#aa3bff]/10 border-[#aa3bff] text-[#aa3bff]' : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                {item}
              </motion.div>
              <div className="text-xs text-slate-400 font-mono">{index}</div>
              
              {/* Pointer Arrow */}
              {isPointer && (
                <motion.div 
                  layoutId="pointer"
                  className="absolute -top-6 text-[#aa3bff] font-bold text-sm flex flex-col items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <span className="text-xs mb-1 font-mono">i</span>
                  ▼
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface SetViewProps {
  items: number[];
  checkTarget: number | null;
}

export function SetView({ items, checkTarget }: SetViewProps) {
  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-sm">
      <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Hash Set (seen)</div>
      <div className="w-full min-h-[120px] bg-slate-100 border-2 border-dashed border-slate-300 rounded-2xl p-6 relative flex flex-wrap gap-4 content-start">
        <AnimatePresence>
          {items.map((item) => {
            const isChecking = checkTarget === item;
            return (
              <motion.div
                key={item}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, backgroundColor: isChecking ? '#f59e0b' : '#10b981' }}
                exit={{ scale: 0, opacity: 0 }}
                className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold shadow-md transition-colors ${isChecking ? 'ring-4 ring-amber-200' : ''}`}
              >
                {item}
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {items.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium italic">
            Set is empty
          </div>
        )}
      </div>
      {checkTarget !== null && !items.includes(checkTarget) && (
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-amber-600 bg-amber-50 px-3 py-1 rounded-full font-medium"
        >
          Checking {checkTarget}... (Not Found)
        </motion.div>
      )}
      {checkTarget !== null && items.includes(checkTarget) && (
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-rose-600 bg-rose-50 px-3 py-1 rounded-full font-bold animate-pulse"
        >
          {checkTarget} already exists!
        </motion.div>
      )}
    </div>
  );
}
interface MapViewProps {
  data: Record<string, any>;
  checkKey: string | null;
}

export function MapView({ data, checkKey }: MapViewProps) {
  const entries = Object.entries(data);
  
  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-sm">
      <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Hash Map / Dict (prevMap)</div>
      <div className="w-full min-h-[120px] bg-slate-100 border-2 border-dashed border-slate-300 rounded-2xl p-4 relative flex flex-col gap-2 overflow-hidden">
        <AnimatePresence>
          {entries.map(([key, value]) => {
            const isChecking = checkKey === key;
            return (
              <motion.div
                key={key}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1, backgroundColor: isChecking ? '#f59e0b' : '#3b82f6' }}
                exit={{ x: 20, opacity: 0 }}
                className="flex items-center justify-between px-4 py-2 rounded-lg text-white font-mono shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold">{key}</span>
                  <span className="text-blue-100 text-xs">→</span>
                  <span className="bg-white/20 px-1.5 rounded">{String(value)}</span>
                </div>
                {isChecking && <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }}>🎯</motion.span>}
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {entries.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium italic">
            Map is empty
          </div>
        )}
      </div>
      {checkKey !== null && !data.hasOwnProperty(checkKey) && (
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-amber-600 bg-amber-50 px-3 py-1 rounded-full font-medium"
        >
          Key {checkKey} not found in map
        </motion.div>
      )}
    </div>
  );
}
