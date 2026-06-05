export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface SubTopic {
  id: string;
  title: string;
  content: string;
  exercises: Exercise[];
}

export interface Module {
  id: string;
  title: string;
  subtopics: SubTopic[];
}

export interface UserProgress {
  [subtopicId: string]: {
    completed: boolean;
    score?: number;
  };
}
