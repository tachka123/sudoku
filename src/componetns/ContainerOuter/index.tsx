import React, { ReactNode } from "react";
import { PureFunc } from "../../types/react";
import styles from "./style.module.css";

interface IProps {
  children: ReactNode;
}

const ContainerOuter = ({ children }: IProps): PureFunc => {
  return <div className={styles.containerOuter}>{children}</div>;
};

export default ContainerOuter;
