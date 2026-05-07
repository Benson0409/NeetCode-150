import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  completedProblems: string[];
  markProblemCompleted: (id: string) => void;
  isProblemCompleted: (id: string) => boolean;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      completedProblems: [],
      markProblemCompleted: (id: string) => 
        set((state) => ({
          completedProblems: state.completedProblems.includes(id) 
            ? state.completedProblems 
            : [...state.completedProblems, id]
        })),
      isProblemCompleted: (id: string) => get().completedProblems.includes(id),
    }),
    {
      name: 'algo-lingo-storage',
    }
  )
);
