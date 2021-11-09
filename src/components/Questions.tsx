import { Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Questions = () => {
  return (
    <div>
      <Container>
        <Paper
          variant="outlined"
          elevation={5}
          style={{
            width: "40rem",
            minHeight: "11.5rem",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 0 20px #3a3a3a",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5">This is question 1</Typography>
          <TextField
            variant="standard"
            label="Enter your querry"
            type="text"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          />
          <Button>Check</Button>
        </Paper>
      </Container>
    </div>
  );
};
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50%;
  margin-right: auto;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 30px;
`;
const List = styled.ol`
  margin-left: -22px;
  font-size: large;
  font-family: sans-serif;
`;

const Button = styled.button`
  background: orange;
  width: 200px;
  margin: auto;
  border-radius: 20px;
  border: none;
  font-size: 1.5rem;
  height: 40px;
  color: #fff;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 10px orange;

  &:hover {
    transform: scale(1.02);
    background: #0d7ae0;
    font-weight: bolder;
    box-shadow: 0 2px 10px #0dd2e0;
  }
`;

export default Questions;
