import { Paper, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

interface Props {
  score: number;
}

const ScoreCard: React.FC<Props> = ({ score }) => {
  return (
    <Container>
      <Paper
        elevation={3}
        style={{
          width: "200px",
          background: "#00000086",
          padding: "10px",
          borderRadius: "20px",
          zIndex: 2,
        }}
      >
        <Typography variant="h4" style={{ color: "white", fontWeight: "bold" }}>
          Score: {score}
        </Typography>
      </Paper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 130px;
  min-width: 100%;
  margin-left: 50%;
  text-align: center;
`;

export default ScoreCard;
