import client from "./Client";

const SECOND_ASSIGNMENT_ENDPOINT_PREFIX: string = "/secondAssignment";

const QUESTIONS_ENDPOINT_PREFIX =
  SECOND_ASSIGNMENT_ENDPOINT_PREFIX + "/questions";

const CHECK_ANSWER_ENDPOINT_PREFIX =
  SECOND_ASSIGNMENT_ENDPOINT_PREFIX + "/checkAnswer";

const RESET_ENDPOINT_PREFIX = SECOND_ASSIGNMENT_ENDPOINT_PREFIX + "/reset";

export const getSecondAssignmentQuestions = (): Promise<any> => {
  console.log("Question getting request done at: ", QUESTIONS_ENDPOINT_PREFIX);
  return client.get(QUESTIONS_ENDPOINT_PREFIX);
};

export const chekAnswers = (id: number, userAnswer: string): Promise<any> => {
  const Payload = {
    id: id,
    userAnswer: userAnswer,
  };
  console.log("Post request done at: ", CHECK_ANSWER_ENDPOINT_PREFIX);

  return client.post(CHECK_ANSWER_ENDPOINT_PREFIX, Payload);
};

export const resetSecondAssignment = (): Promise<any> => {
  return client.post(RESET_ENDPOINT_PREFIX);
};
