import React, { ReactNode } from "react";
import { PureFunc } from "../../types/react";
import s from "./s.module.css";

interface IProps {
  children: ReactNode;
}

const Container = ({ children }: IProps): PureFunc => {
  return <div className={s.container}>{children} </div>;
};

export default Container;
