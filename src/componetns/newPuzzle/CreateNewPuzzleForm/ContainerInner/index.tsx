import React, { useCallback } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import CrossHairExit from "../../../../assets/startFormAssets";
import { ComplexityLevels } from "../../../../types/helpers";
import { Routes } from "../../../Router";
import CreateNewPuzzleButton from "../../CreateNewPuzzleButton";
import Select from "../SelectItem";
import { stateToProps } from "../../../../redux";
import { setComplexityAction } from "../../../../redux/complexity";
import s from "./style.module.css";
import { generateMatrixByComplexity } from "../../../../redux/thunks";

const toKeysLevels: (keyof typeof ComplexityLevels)[] = Object.values(
  ComplexityLevels
).filter((item) => typeof item !== "number");

const ContainerInner = ({
  history,
  complexity,
  setComplexity,
  onStart,
}: RouteComponentProps & ReduxProps) => {
  const onClick = useCallback(
    (val: ComplexityLevels) => {
      setComplexity(val);
    },
    [setComplexity]
  );
  const returnGame = useCallback(() => {
    history.push(Routes.GAME);
  }, [history]);
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onStart(() => {
        returnGame();
      });
    },
    [onStart, returnGame]
  );

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <div className={s.upperLine}>
        <div></div>
        <h1>Choose difficulty</h1>
        <div onClick={returnGame} className={s.crossHairContainer}>
          <CrossHairExit />
        </div>
      </div>
      {toKeysLevels.map((level, key) => (
        <Select
          key={key}
          value={ComplexityLevels[level]}
          text={level}
          currentValue={complexity}
          onClick={onClick}
        />
      ))}
      <CreateNewPuzzleButton type="submit">Create</CreateNewPuzzleButton>
    </form>
  );
};

const connector = connect(stateToProps, {
  setComplexity: setComplexityAction,
  onStart: generateMatrixByComplexity,
});

type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(ContainerInner));
