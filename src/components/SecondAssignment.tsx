import React, { useEffect, useState } from "react";
import { chekAnswers } from "../calls/SecondAssignmentCalls";
import {
  getSecondAssignmentQuestions,
  resetSecondAssignment,
} from "../calls/SecondAssignmentCalls";
import {
  secondAssignmentDescription,
  secondAssignmentTableDetails,
} from "../constants/QuestionDetails";
import { QuestionsResponse } from "../interfaces/AssignmentQuesionsResponse";
import AssignmentDescription from "./AssignmentDescription";
import Navbar from "./Navbar";
import Questions from "./Questions";
import ReactSpinner from "./ReactSpinner";
import ResetQuiz from "./ResetQuiz";

interface Props {
  currentActive: string;
  setCurrentActive(value: string): void;
}

const SecondAssignment: React.FC<Props> = ({
  currentActive,
  setCurrentActive,
}) => {
  const [questions, setQuestions] = useState<Array<QuestionsResponse>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSecondAssignmentQuestions()
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handelSecondAssignmentResetClicked = () => {
    resetSecondAssignment()
      .then((res) => {
        setLoading(true);
        getSecondAssignmentQuestions().then((res) => {
          setQuestions(res.data);
          setLoading(false);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {loading && <ReactSpinner />}
      {!loading && (
        <div>
          <Navbar
            currentActive={currentActive}
            setCurrentActive={setCurrentActive}
          />
          <AssignmentDescription
            description={secondAssignmentDescription}
            tableDetails={secondAssignmentTableDetails}
          />
          {questions.length !== 0 &&
            questions.map((question) => {
              return (
                <Questions
                  key={question.id}
                  user={question}
                  checkAnswers={chekAnswers}
                />
              );
            })}
          <ResetQuiz handelResetClicked={handelSecondAssignmentResetClicked} />
        </div>
      )}
    </>
  );
};

export default SecondAssignment;
