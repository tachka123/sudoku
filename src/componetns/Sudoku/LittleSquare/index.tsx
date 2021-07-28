import React from "react";
import InSquareInput from "../InSquareInput";
import s from "./s.module.css";

const LittleSquare = () => {
  return (
    <div className={s.container}>
      <InSquareInput />
    </div>
  );
};

export default LittleSquare;
