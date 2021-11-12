import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Link to="/firstAssignment">
        <Button>Start Assignment</Button>
      </Link>
    </Container>
  );
};

const Button = styled.button`
  position: absolute;
  top: 55vh;
  left: 43vw;
  width: 250px;
  height: 70px;
  font-size: 1.5rem;
  border-radius: 20px;
  border: none;
  background-color: #f5ab18;
  color: white;
  cursor: pointer;
  box-shadow: 0 0 20px #cf8f0ed8;
  transition: all 0.5s ease;

  &:hover {
    background-color: #0db5d3;
    transform: scale(1.25);
    font-weight: bold;
    box-shadow: 0 0 20px #0eb9cfd7;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export default Login;
