import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import RestoreIcon from "@mui/icons-material/Restore";
import { Paper } from "@mui/material";
interface Props {
  handelResetClicked(): void;
}

const ResetQuiz: React.FC<Props> = ({ handelResetClicked }) => {
  return (
    <Section>
      <Paper elevation={0} style={{ background: "transparent" }}>
        <RestoreIcon
          style={{ position: "relative", left: "40px", zIndex: 5, top: "8px" }}
          color="error"
        />
        <Button
          variant="contained"
          color="secondary"
          style={{
            width: "300px",
            fontSize: "1.5rem",
            borderRadius: "30px",
            backgroundColor: "orange",
            height: "45px",
          }}
          onClick={handelResetClicked}
        >
          Reset
        </Button>
        <RestoreIcon
          style={{
            position: "relative",
            zIndex: 5,
            top: "8px",
            right: "40px",
          }}
          color="error"
        />
      </Paper>
    </Section>
  );
};
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 100%;
  margin-left: 50%;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 50px;
`;
export default ResetQuiz;
