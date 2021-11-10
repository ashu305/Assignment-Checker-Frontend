import { Paper, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

interface Props {
  description: string;
  tableDetails: string[];
}

const AssignmentDescription: React.FC<Props> = ({
  description,
  tableDetails,
}) => {
  return (
    <div>
      <Container>
        <Paper
          variant="outlined"
          elevation={5}
          style={{
            maxWidth: "40rem",
            minHeight: "13rem",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 0 20px #3a3a3a",
          }}
        >
          <Typography
            variant="h4"
            color="primary"
            style={{
              position: "relative",
              textAlign: "center",
            }}
          >
            Description
          </Typography>
          <br />
          <Typography variant="body1" style={{ fontSize: "1.125rem" }}>
            {description}
          </Typography>
          <List>
            {tableDetails.map((table, index) => {
              return (
                <li style={{ marginTop: "8px" }} key={index}>
                  {table}
                </li>
              );
            })}
          </List>
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
  margin-top: 200px;
  margin-left: 50%;
  margin-right: auto;
  width: 100%;
`;
const List = styled.ol`
  margin-left: -22px;
  font-size: large;
  font-family: sans-serif;
`;
export default AssignmentDescription;
