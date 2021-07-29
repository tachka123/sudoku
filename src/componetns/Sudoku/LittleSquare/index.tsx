import React, { CSSProperties } from "react";
import { connect, ConnectedProps } from "react-redux";
import { stateToProps } from "../../../redux";
import { setSquarePointAction } from "../../../redux/matrix";
import { setSquarePointThunk } from "../../../redux/thunks";
import { ISquarePoint } from "../../../types/helpers";

import s from "./s.module.css";

interface IProps {
  squareIndex: number;
  littleIndex: number;
  squarePoint: ISquarePoint;
}

const returnColor = (b: boolean) => (b ? "black" : "red");

const LittleSquare = ({
  squareIndex,
  littleIndex,
  squarePoint,
  setSquarePointWithCheck,
}: IProps & ReduxProps) => {
  const onChangecb = ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSquarePointWithCheck(
      { ...squarePoint, value },
      squareIndex,
      littleIndex
    );
  };
  const styles: CSSProperties = {
    color: returnColor(squarePoint.correct),
    borderColor: returnColor(squarePoint.correct),
  };
  return (
    <div style={styles} className={s.container}>
      <input
        disabled={squarePoint.disabled}
        style={styles}
        value={squarePoint.value}
        onChange={onChangecb}
        type="number"
        className={s.inputSquare}
      />
    </div>
  );
};

const connector = connect(stateToProps, {
  setSquarePoint: setSquarePointAction,
  setSquarePointWithCheck: setSquarePointThunk,
});

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(LittleSquare);
