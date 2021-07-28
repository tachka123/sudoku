import React from "react";
import s from "./s.module.css";

const InSquareInput = () => {
  return <input maxLength={1} type="number" className={s.inputSquare}></input>;
};

export default InSquareInput;
