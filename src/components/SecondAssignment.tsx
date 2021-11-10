import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import AssignmentDescription from "./AssignmentDescription";
import Navbar from "./Navbar";

interface Props {
  currentActive: string;
  setCurrentActive(value: string): void;
}

const SecondAssignment: React.FC<Props> = ({
  currentActive,
  setCurrentActive,
}) => {
  const description = "COMMING SOON!!! BE READY!!";
  return (
    <>
      <Navbar
        currentActive={currentActive}
        setCurrentActive={setCurrentActive}
      />
      <Container>
        <Typography variant="h3">COMMING SOON!! BE READY!!</Typography>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 400px;
  margin-left: 50%;
  margin-right: auto;
  width: 100%;
  background: white;
  border-radius: 20px;
`;
export default SecondAssignment;
