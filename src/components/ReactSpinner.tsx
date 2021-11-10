import React from "react";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/react";
import styled from "styled-components";

const loaderCSS = css`
  display: flex;
  position: relative;
  margin: auto;
  top: 300px;
`;

const ReactSpinner = () => {
  return (
    <Container>
      <ClipLoader size={60} color={"#807e7e"} speedMultiplier={1} />
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
`;
export default ReactSpinner;
