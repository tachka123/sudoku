import React, { useCallback, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import CrossHairExit from "../../../../assets/startFormAssets";
import { Routes } from "../../../Router";
import CreateNewPuzzleButton from "../../CreateNewPuzzleButton";
import Select from "../SelectItem";
import s from "./style.module.css";

enum ComplexityLevels {
  "Easy, 3-5 prefilled numbers",
  "Medium, 3-4 prefilled numbers",
  "Hard — 1-3 prefilled numbers",
}

const toKeysLevels: (keyof typeof ComplexityLevels)[] = Object.values(
  ComplexityLevels
).filter((item) => typeof item !== "number");

const ContainerInner = ({ history }: RouteComponentProps) => {
  const [val, chValue] = useState(
    ComplexityLevels["Easy, 3-5 prefilled numbers"]
  );
  const onGoToGame = useCallback(() => {
    history.push(Routes.GAME);
  }, [history]);
  const onClick = useCallback((val: number) => {
    chValue(val);
  }, []);
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onGoToGame();
    },
    [onGoToGame]
  );

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <div className={s.upperLine}>
        <div></div>
        <h1>Choose difficulty</h1>
        <div onClick={onGoToGame} className={s.crossHairContainer}>
          <CrossHairExit />
        </div>
      </div>
      {toKeysLevels.map((level, key) => (
        <Select
          key={key}
          value={ComplexityLevels[level]}
          text={level}
          currentValue={val}
          onClick={onClick}
        />
      ))}
      <CreateNewPuzzleButton type="submit">Create</CreateNewPuzzleButton>
    </form>
  );
};

export default withRouter(ContainerInner);
