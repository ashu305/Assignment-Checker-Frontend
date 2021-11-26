import React, { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import FirstAssignment from "./components/FirstAssignment";
import SecondAssignment from "./components/SecondAssignment";
import ThirdAssignment from "./components/ThirdAssignment";

const App = () => {
  const [currentActive, setCurrentActive] = useState("Assignment 1");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/firstAssignment"
            element={
              <FirstAssignment
                currentActive={currentActive}
                setCurrentActive={setCurrentActive}
              />
            }
          />
          <Route
            path="/secondAssignment"
            element={
              <SecondAssignment
                currentActive={currentActive}
                setCurrentActive={setCurrentActive}
              />
            }
          />
          <Route
            path="/thirdAssignment"
            element={
              <ThirdAssignment
                currentActive={currentActive}
                setCurrentActive={setCurrentActive}
              />
            }
          />
          <Route
            path="/fourthAssignment"
            element={
              <ThirdAssignment
                currentActive={currentActive}
                setCurrentActive={setCurrentActive}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
