import React from "react";
import { connect, ConnectedProps } from "react-redux";
import s from "./s.module.css";
import Square from "./Square";
import LittleSquare from "./LittleSquare";
import { stateToProps } from "../../redux";
import { LittleSquare as ILittleSquare } from "../../types/helpers";

const Sudoku = ({ sudoky }: ReduxProps) => {
  return (
    <div className={s.container}>
      {sudoky.map((square, squareIndex) => (
        <SquareInSudoku
          key={squareIndex}
          littleSquare={square}
          squareIndex={squareIndex}
        />
      ))}
    </div>
  );
};

interface ISquareInSudoku {
  littleSquare: ILittleSquare;
  squareIndex: number;
}

const SquareInSudoku = ({ littleSquare, squareIndex }: ISquareInSudoku) => {
  return (
    <Square key={squareIndex}>
      {littleSquare.map((littleSquare, littleIndex) => (
        <LittleSquare
          squarePoint={littleSquare}
          littleIndex={littleIndex}
          squareIndex={squareIndex}
          key={littleIndex}
        ></LittleSquare>
      ))}
    </Square>
  );
};

const connector = connect(stateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Sudoku);
