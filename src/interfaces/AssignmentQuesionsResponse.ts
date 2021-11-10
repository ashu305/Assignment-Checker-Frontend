import { checkAnswerStatue } from "../constants/enums/CheckAnswerStatus";

export interface QuestionsResponse {
  id: number;
  question: string;
  userAnswer: string | null;
  userStatus: checkAnswerStatue;
}
