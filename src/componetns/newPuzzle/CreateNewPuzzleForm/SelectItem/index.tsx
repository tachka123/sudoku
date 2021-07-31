import React, { useCallback } from "react";
import CustomRadio from "./CustomRadio";
import s from "./s.module.css";

interface IProps {
  value: number;
  text: string;
  currentValue: number;
  onClick: (val: number) => void;
}

const Select = ({ value, text, currentValue, onClick }: IProps) => {
  const cbOnClick = useCallback(() => {
    onClick(value);
  }, []);
  return (
    <div onClick={cbOnClick} className={s.container}>
      <CustomRadio
        cbOnClick={cbOnClick}
        value={value}
        currentValue={currentValue}
      />
      <span className={s.text}>{text}</span>
    </div>
  );
};

export default Select;
