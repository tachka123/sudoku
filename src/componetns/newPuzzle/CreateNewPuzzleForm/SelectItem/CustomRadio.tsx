import React from "react";
import s from "./s.module.css";

interface IProps {
  cbOnClick: () => void;
  value: number;
  currentValue: number;
}

const CustomRadio = ({ cbOnClick, currentValue, value }: IProps) => {
  const active = value === currentValue;
  return (
    <div className={s.radioContainer}>
      <div className={s.radioStroke}></div>
      {active && <div className={s.radioPoint}></div>}
      <div className={s.radioStrokeHover}></div>
      <input
        onChange={cbOnClick}
        checked={active}
        type="radio"
        className={s.radioBtn}
      />
    </div>
  );
};

export default CustomRadio;
