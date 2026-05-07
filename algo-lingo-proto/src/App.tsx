import { useState } from 'react';
import { Home } from './pages/Home';
import { Problem } from './pages/Problem';
import chapter1Data from './data/chapter1.json';
import type { ProblemData } from './types';
import { useAppStore } from './store/useAppStore';

function App() {
  const [currentProblemId, setCurrentProblemId] = useState<string | null>(null);
  const { markProblemCompleted, isProblemCompleted } = useAppStore();

  const handleSelectProblem = (id: string) => {
    setCurrentProblemId(id);
  };

  const handleBackToHome = () => {
    setCurrentProblemId(null);
  };

  const currentProblemData = currentProblemId 
    ? (chapter1Data as ProblemData[]).find(p => p.id === currentProblemId)
    : null;

  return (
    <>
      {!currentProblemId || !currentProblemData ? (
        <Home onSelectProblem={handleSelectProblem} />
      ) : (
        <Problem 
          data={currentProblemData} 
          onBack={handleBackToHome}
          onMarkCompleted={markProblemCompleted}
          isCompleted={isProblemCompleted(currentProblemData.id)}
        />
      )}
    </>
  );
}

export default App;
