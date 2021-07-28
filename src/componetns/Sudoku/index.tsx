import React from "react";
import s from "./s.module.css";
import Square from "./Square";
import LittleSquare from "./LittleSquare";

const Sudoku = () => {
  return (
    <div className={s.container}>
      <Square>
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
      </Square>
      <Square>
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
      </Square>
      <Square>
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
      </Square>
      <Square>
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
      </Square>
      <Square>
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
      </Square>
      <Square>
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
        <LittleSquare />
      </Square>
    </div>
  );
};

export default Sudoku;
