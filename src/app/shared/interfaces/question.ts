export interface Question {
  id: number;
  type: string;
  question: string;
  answerOptions: string[];
  rightAnswer: string;
  date: Date;
  isEdited: boolean;
  isAnswered: boolean;
  answer?: string;
}
