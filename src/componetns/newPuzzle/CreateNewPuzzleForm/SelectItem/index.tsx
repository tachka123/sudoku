import React, { useCallback } from "react";
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
      <input
        onChange={cbOnClick}
        checked={value === currentValue}
        type="radio"
        className={s.radioBtn}
      />
      <span className={s.text}>{text}</span>
    </div>
  );
};

export default Select;
