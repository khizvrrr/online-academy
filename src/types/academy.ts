export type SubjectLevel = 'O-Level' | 'IGCSE' | 'AS-Level' | 'A-Level';
export type ExamBoard = 'Cambridge (CAIE)' | 'Edexcel' | 'Oxford AQA';

export interface Course {
  id: string;
  title: string;
  subject: string;
  level: SubjectLevel;
  examBoard: ExamBoard;
  code: string;
  tagline: string;
  description: string;
  syllabusHighlights: string[];
  classFormat: string;
  schedule: string;
  duration: string;
  batchSize: string;
  pricePlaceholder: string;
  topics: {
    unit: string;
    title: string;
    description: string;
  }[];
  prerequisites: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Enrollment' | 'Classes' | 'Fees';
}

export interface AcademicNotice {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
}
