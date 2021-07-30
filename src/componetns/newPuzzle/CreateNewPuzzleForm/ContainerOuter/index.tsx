import React, { ReactNode } from "react";
import s from "./s.module.css";

interface IProps {
  children: ReactNode;
}

const ContainerOuter = ({ children }: IProps) => {
  return <div className={s.container}>{children}</div>;
};

export default ContainerOuter;
