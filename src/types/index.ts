export type StationId =
  | 'logic_math'
  | 'tech_algo'
  | 'science_inquiry'
  | 'creative_design'
  | 'language_expression'
  | 'comm_collab'
  | 'org_planning'
  | 'empathy_support';

export interface TaskStepOption {
  id: string;
  text: string;
  isCorrect?: boolean;
  score?: number; // 1-3 quality of choice
  explanation: string; // Detailed pedagogical explanation of reasoning
}

export interface TaskStep {
  stepNumber: number;
  title: string;
  description: string;
  type: 'single_choice' | 'scenario_choice' | 'ordering' | 'allocation' | 'interactive_matrix';
  scenarioContext?: string;
  options: TaskStepOption[];
  interactiveData?: any; // For custom interactive mechanics (e.g. sequence blocks, budget balance)
  hint?: string;
}

export interface BonusChallenge {
  title: string;
  description: string;
  question: string;
  options: TaskStepOption[];
  learningInsight: string;
}

export interface StationData {
  id: StationId;
  title: string;
  shortTitle: string;
  category: string;
  timeEstimate: string; // e.g. "4–6 phút"
  color: {
    primary: string;
    bg: string;
    text: string;
    border: string;
    accent: string;
  };
  iconName: string;
  tagline: string;
  introduction: string;
  competencyFocus: string[];
  steps: TaskStep[];
  bonusChallenge: BonusChallenge;
  strengthsReflectionOptions: string[];
}

export interface StationReflection {
  interestRating: number; // 1-5
  difficultyRating: number; // 1-5
  strengthsIdentified: string[];
  nextIntent: 'retry' | 'practice_more' | 'explore_other';
  notes?: string;
  completedAt: string;
}

export interface StationResult {
  stationId: StationId;
  completed: boolean;
  stepAnswers: Record<number, string>; // stepNumber -> selectedOptionId
  bonusAnswer?: string;
  score: number; // Raw points from task
  maxScore: number;
  demonstratedCompetencies: string[];
  reflection?: StationReflection;
}

export interface UserProfile {
  studentName?: string;
  stationResults: Record<StationId, StationResult>;
  targetCompetenciesToGrow: string[];
  customGoalForNextWeek?: string;
  personalNotes?: string;
}
