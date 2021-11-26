import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

interface Props {
  currentActive: string;
  setCurrentActive(value: string): void;
}
const ThirdAssignment: React.FC<Props> = ({
  currentActive,
  setCurrentActive,
}) => {
  return (
    <>
      <Navbar
        currentActive={currentActive}
        setCurrentActive={setCurrentActive}
      />
      <Container>
        <Section>
          <Typography variant="h4">Coming soon Be Ready!</Typography>
        </Section>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vh;
  height: 100%;
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3ba408f;
  position: absolute;
  color: white;
  border-radius: 20px;
  border: none;
  transform: scale(1.35);
  padding: 5px;
  margin-left: 35rem;
  margin-top: 25rem;
`;

export default ThirdAssignment;
