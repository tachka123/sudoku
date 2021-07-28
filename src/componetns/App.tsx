import React from "react";
import ContainerOuter from "./ContainerOuter";
import Container from "./Container";
import { PureFunc } from "../types/react";
import LogoContainer from "./LogoContainer";
import Sudoku from "./Sudoku";
import CreateNewPuzzleButton from "./newPuzzle/CreateNewPuzzleButton";

import "./styles/normalize.css";
import "../assets/fonts/font.css";

const App = (): PureFunc => {
  return (
    <ContainerOuter>
      <Container>
        <LogoContainer />
        <Sudoku />
        <CreateNewPuzzleButton />
      </Container>
    </ContainerOuter>
  );
};

export default App;
