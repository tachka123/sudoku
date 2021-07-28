import React from "react";
import LogoContainer from "../LogoContainer";
import Sudoku from "../Sudoku";
import CreateNewPuzzleButton from "../newPuzzle/CreateNewPuzzleButton";
import Container from "../Container";
import { Route, Switch } from "react-router-dom";
import CreateNewPuzzleForm from "../newPuzzle/CreateNewPuzzleForm";

export enum Routes {
  GAME = "/game",
  START = "/start",
}

const GameRoute = () => (
  <Route path={Routes.GAME}>
    <Container>
      <LogoContainer />
      <Sudoku />
      <CreateNewPuzzleButton />
    </Container>
  </Route>
);

const StartGameRoute = () => (
  <Route path={Routes.START}>
    <CreateNewPuzzleForm />
  </Route>
);

const Router = () => (
  <Switch>
    <GameRoute />
    <StartGameRoute />
  </Switch>
);

export default Router;
