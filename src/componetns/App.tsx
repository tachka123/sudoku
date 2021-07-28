import React from "react";
import ContainerOuter from "./ContainerOuter";
import Container from "./Container";
import { PureFunc } from "../types/react";
import LogoContainer from "./LogoContainer";

import "./styles/normalize.css";
import Sudoku from "./Sudoku";

const App = (): PureFunc => {
  return (
    <ContainerOuter>
      <Container>
        <LogoContainer />
        <Sudoku />
      </Container>
    </ContainerOuter>
  );
};

export default App;
