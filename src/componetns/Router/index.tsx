import React, { useCallback } from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";
import FallBack from "../FallBack";

const LogoContainer = React.lazy(() => import("../LogoContainer"));
const Sudoku = React.lazy(() => import("../Sudoku"));
const CreateNewPuzzleButton = React.lazy(
  () => import("../newPuzzle/CreateNewPuzzleButton")
);
const Container = React.lazy(() => import("../Container"));
const CreateNewPuzzleForm = React.lazy(
  () => import("../newPuzzle/CreateNewPuzzleForm")
);

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
      <FallBack>
        <LogoContainer />
      </FallBack>

      <FallBack>
        <Sudoku />
      </FallBack>
      <FallBack>
        <CreateNewPuzzleButton type="button" onClick={cbOnClick}>
          Create new puzzle
        </CreateNewPuzzleButton>
      </FallBack>
    </Container>
  );
};

const StartGameRoute = () => <CreateNewPuzzleForm />;

const Router = (props: RouteComponentProps) => (
  <Switch>
    <Route path={Routes.GAME}>
      <FallBack>
        <GameRoute {...props} />
      </FallBack>
    </Route>
    <Route exact path={Routes.START}>
      <FallBack>
        <StartGameRoute />
      </FallBack>
    </Route>
  </Switch>
);

export default withRouter(Router);
