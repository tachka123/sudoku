import React, { useCallback } from "react";
import LogoContainer from "../LogoContainer";
import Sudoku from "../Sudoku";
import CreateNewPuzzleButton from "../newPuzzle/CreateNewPuzzleButton";
import Container from "../Container";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";
import CreateNewPuzzleForm from "../newPuzzle/CreateNewPuzzleForm";

export enum Routes {
  GAME = "/game",
  START = "/",
}

const GameRoute = ({ history }: RouteComponentProps) => {
  const cbOnClick = useCallback(() => {
    history.push(Routes.START);
  }, [history]);
  return (
    <Container>
      <LogoContainer />
      <Sudoku />
      <CreateNewPuzzleButton type="button" onClick={cbOnClick}>
        Create new puzzle
      </CreateNewPuzzleButton>
    </Container>
  );
};

const StartGameRoute = () => <CreateNewPuzzleForm />;

const Router = () => (
  <Switch>
    <Route path={Routes.GAME}>{withRouter(GameRoute)}</Route>
    <Route exact path={Routes.START}>
      <StartGameRoute />
    </Route>
  </Switch>
);

export default Router;
