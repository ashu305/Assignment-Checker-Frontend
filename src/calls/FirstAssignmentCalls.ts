import client from "./Client";

const FIRST_ASSIGNMENT_ENDPOINT_PREFIX: string = "/firstAssignment";

const QUESTIONS_ENDPOINT_PREFIX =
  FIRST_ASSIGNMENT_ENDPOINT_PREFIX + "/questions";

const CHECK_ANSWER_ENDPOINT_PREFIX =
  FIRST_ASSIGNMENT_ENDPOINT_PREFIX + "/checkAnswer";

const RESET_ENDPOINT_PREFIX = FIRST_ASSIGNMENT_ENDPOINT_PREFIX + "/reset";

export const getFirstAssignmentQuestions = (): Promise<any> => {
  return client.get(QUESTIONS_ENDPOINT_PREFIX);
};

export const chekAnswers = (id: number, userAnswer: string): Promise<any> => {
  const Payload = {
    id: id,
    userAnswer: userAnswer,
  };

  return client.post(CHECK_ANSWER_ENDPOINT_PREFIX, Payload);
};

export const resetFirstAssignment = (): Promise<any> => {
  return client.post(RESET_ENDPOINT_PREFIX);
};
