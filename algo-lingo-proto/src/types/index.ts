export interface PuzzleBlock {
  id: string;
  code: string;
  originalIndent: number;
}

export interface QuizQuestion {
  id: string;
  difficulty?: string;
  testPoint?: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface ProblemData {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Unknown";
  description: string;
  examples?: string;
  constraints?: string;
  concept: string;
  puzzle: {
    blocks: PuzzleBlock[];
    correctOrderIds: string[];
  };
}
