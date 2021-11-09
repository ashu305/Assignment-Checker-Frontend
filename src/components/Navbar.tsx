import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [currentActive, setCurrentActive] = useState("Assignment 1");
  return (
    <Container>
      <Link to="/firstAssignment" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          size="large"
          style={{
            color: currentActive === "Assignment 1" ? "#FFF508" : "white",
            marginLeft: "20px",
          }}
          onClick={() => setCurrentActive("Assignment 1")}
        >
          <Typography variant="h6">Assignment 1</Typography>
        </Button>
      </Link>
      <Link to="/secondAssignment" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          size="large"
          style={{
            color: currentActive === "Assignment 2" ? "#FFF508" : "white",
          }}
          onClick={() => setCurrentActive("Assignment 2")}
        >
          <Typography variant="h6">Assignment 2</Typography>
        </Button>
      </Link>
      <Link to="/thirdAssignment" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          size="large"
          style={{
            color: currentActive === "Assignment 3" ? "#FFF508" : "white",
          }}
          onClick={() => setCurrentActive("Assignment 3")}
        >
          <Typography variant="h6">Assignment 3</Typography>
        </Button>
      </Link>
      <Link to="/fourthAssignment" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          size="large"
          style={{
            color: currentActive === "Assignment 4" ? "#FFF508" : "white",
            marginRight: "20px",
          }}
          onClick={() => setCurrentActive("Assignment 4")}
        >
          <Typography variant="h6">Assignment 4</Typography>
        </Button>
      </Link>
    </Container>
  );
};
const Container = styled.nav`
  position: absolute;
  background: #0000007d;
  margin: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  background-size: cover;
  overflow: hidden;
  z-index: 999;
`;
export default Navbar;
