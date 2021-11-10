import { Paper, Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import styled from "styled-components";
import { checkAnswerStatue } from "../constants/enums/CheckAnswerStatus";
import { QuestionsResponse } from "../interfaces/AssignmentQuesionsResponse";
import { chekAnswers } from "../calls/FirstAssignmentCalls";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
interface Props {
  user: QuestionsResponse;
}

const Questions: React.FC<Props> = ({ user }) => {
  const [status, setStatus] = useState(user.userStatus);
  const [userAnswer, setUserAnswer] = useState("");
  const handelUserAnswerChange = (event: any) => {
    setUserAnswer(event.target.value);
  };
  const handelCheckClicked = () => {
    console.log(user.id, userAnswer);

    chekAnswers(user.id, userAnswer)
      .then((res) => {
        if (res.data[0].userStatus === checkAnswerStatue.APPROVED) {
          setStatus(checkAnswerStatue.APPROVED);
        } else if (res.data[0].userStatus === checkAnswerStatue.REJECTED) {
          setStatus(checkAnswerStatue.REJECTED);
        } else {
          setStatus(checkAnswerStatue.ERROR);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Container>
        <Paper
          variant="outlined"
          elevation={5}
          style={{
            width: "40rem",
            minHeight: "11.2rem",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 0 20px #3a3a3a",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ float: "left" }}>
            <Typography variant="h5">{user.question}</Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "-10px",
            }}
          >
            {status === checkAnswerStatue.APPROVED ? (
              <CheckCircleIcon
                color="success"
                style={{ width: "fit-content" }}
              />
            ) : (
              status !== checkAnswerStatue.NOT_STARTED && (
                <CancelRoundedIcon color="error" />
              )
            )}
          </div>
          <TextField
            variant="outlined"
            label="Enter your querry"
            type="text"
            style={{ marginTop: "20px", marginBottom: "20px" }}
            defaultValue={user.userAnswer !== null ? user.userAnswer : ""}
            onChange={handelUserAnswerChange}
            color={
              status === checkAnswerStatue.APPROVED
                ? "success"
                : status !== checkAnswerStatue.NOT_STARTED
                ? "error"
                : "primary"
            }
            focused={
              status === checkAnswerStatue.APPROVED
                ? true
                : status !== checkAnswerStatue.NOT_STARTED
                ? true
                : false
            }
            InputProps={{
              readOnly: status === checkAnswerStatue.APPROVED,
            }}
          />
          <Button
            onClick={handelCheckClicked}
            disabled={status === checkAnswerStatue.APPROVED}
            variant="contained"
            color="primary"
            style={{
              borderRadius: "20px",
              fontSize: "1rem",
            }}
          >
            Check
          </Button>
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

const StyledButton = styled.button`
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

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default Questions;
