import React, { useState, useEffect } from "react";
import {
  getFirstAssignmentQuestions,
  resetFirstAssignment,
} from "../calls/FirstAssignmentCalls";
import { QuestionsResponse } from "../interfaces/AssignmentQuesionsResponse";
import AssignmentDescription from "./AssignmentDescription";
import Navbar from "./Navbar";
import Questions from "./Questions";
import ReactSpinner from "./ReactSpinner";
import ResetQuiz from "./ResetQuiz";

const FirstAssignment: React.FC = () => {
  const description = `Create an Employee database consisting of four tables namely,
  employees, works, and company, as given below, where the primary
  keys are underlined.`;
  const tableDetails = [
    `employee (employee_id, employee_name, street, city)`,
    `works(employee_id, company_name, salary)`,
    `company(company_name, city): Name and location of the comany`,
  ];
  const [questions, setQuestions] = useState<Array<QuestionsResponse>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFirstAssignmentQuestions()
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handelFirstAssignmentResetClicked = () => {
    resetFirstAssignment()
      .then((res) => {
        console.log("RESET Sccessful!!!");
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
          <Navbar />
          <AssignmentDescription
            description={description}
            tableDetails={tableDetails}
          />
          {questions.length !== 0 &&
            questions.map((question) => {
              return <Questions key={question.id} user={question} />;
            })}
          <ResetQuiz handelResetClicked={handelFirstAssignmentResetClicked} />
        </div>
      )}
    </>
  );
};

export default FirstAssignment;
