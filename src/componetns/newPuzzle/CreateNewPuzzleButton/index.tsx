import React, { useCallback } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Routes } from "../../Router";

import s from "./s.module.css";

const CreateNewPuzzleButton = ({ history: { push } }: RouteComponentProps) => {
  const cbOnClick = useCallback(() => {
    push(Routes.START);
  }, []);
  return (
    <button onClick={cbOnClick} className={s.container}>
      Create new puzzle
    </button>
  );
};

export default withRouter(CreateNewPuzzleButton);
