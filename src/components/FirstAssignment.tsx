import React, { useState } from "react";
import AssignmentDescription from "./AssignmentDescription";
import Navbar from "./Navbar";
import Questions from "./Questions";
import ScoreCard from "./ScoreCard";

const FirstAssignment: React.FC = () => {
  const description = `Create an Employee database consisting of four tables namely,
  employees, works, and company, as given below, where the primary
  keys are underlined.`;
  const tableDetails = [
    `employee (employee_id, employee_name, street, city)`,
    `works(employee_id, company_name, salary)`,
    `company(company_name, city): Name and location of the comany`,
  ];
  const [score, setScore] = useState(0);
  return (
    <>
      <Navbar />
      <ScoreCard score={score} />
      <AssignmentDescription
        description={description}
        tableDetails={tableDetails}
      />
      <Questions />
    </>
  );
};

export default FirstAssignment;
