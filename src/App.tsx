import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import FirstAssignment from "./components/FirstAssignment";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/firstAssignment" element={<FirstAssignment />} />
          <Route path="/secondAssignment" element={<FirstAssignment />} />
          <Route path="/thirdAssignment" element={<FirstAssignment />} />
          <Route path="/fourthAssignment" element={<FirstAssignment />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
