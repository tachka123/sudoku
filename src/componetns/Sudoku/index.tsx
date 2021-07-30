import React from "react";
import { connect, ConnectedProps } from "react-redux";
import s from "./s.module.css";
import Square from "./Square";
import Row from "./Row";
import { stateToProps } from "../../redux";
import { Row as IRow } from "../../types/helpers";

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
  littleSquare: IRow;
  squareIndex: number;
}

const SquareInSudoku = ({ littleSquare, squareIndex }: ISquareInSudoku) => {
  return (
    <Square key={squareIndex}>
      {littleSquare.map((littleSquare, littleIndex) => (
        <Row
          squarePoint={littleSquare}
          littleIndex={littleIndex}
          squareIndex={squareIndex}
          key={littleIndex}
        ></Row>
      ))}
    </Square>
  );
};

const connector = connect(stateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Sudoku);
