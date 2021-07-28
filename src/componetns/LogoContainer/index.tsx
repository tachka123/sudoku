import React from "react";
import { Tiger, LogoSpan } from "../../assets/logoAssets";
import { PureFunc } from "../../types/react";

import s from "./s.module.css";

const LogoContainer = (): PureFunc => {
  return (
    <div className={s.container}>
      <Tiger />
      <LogoSpan />
    </div>
  );
};

export default LogoContainer;
