import React, { ReactNode } from "react";

import s from "./s.module.css";

interface IProps {
  onClick?: () => void;
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
}

const CreateNewPuzzleButton = ({ onClick, children, type }: IProps) => {
  return (
    <button type={type} onClick={onClick} className={s.container}>
      {children}
    </button>
  );
};

export default CreateNewPuzzleButton;
