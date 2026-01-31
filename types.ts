export type JLPTLevel = 'N5' | 'N4' | 'N3';

export type SkillName = 
  | 'Kana' 
  | 'Kanji' 
  | 'Vocabulary' 
  | 'Grammar' 
  | 'Listening' 
  | 'Speaking' 
  | 'Reading' 
  | 'Writing';

export interface LessonContent {
  text: string;
  furigana: string;
  meaning: string;
  meaningMm?: string; // Myanmar translation for the meaning
  explanation?: string; // English explanation
  explanationMm?: string; // Myanmar explanation
  exampleSentences?: string[]; // Demonstration sentences
  options?: string[];
  correctAnswer?: string;
}

export interface Lesson {
  level: JLPTLevel;
  skill: SkillName;
  lessonId: string;
  title: string;
  content: LessonContent;
}

export interface UserProgress {
  completedLessons: string[];
  level: JLPTLevel;
}