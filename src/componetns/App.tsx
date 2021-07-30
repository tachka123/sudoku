import React from "react";
import ContainerOuter from "./ContainerOuter";
import { PureFunc } from "../types/react";
import Router from "./Router";

import "./styles/normalize.css";
import "../assets/fonts/font.css";

const App = (): PureFunc => {
  return (
    <ContainerOuter>
      <Router />
    </ContainerOuter>
  );
};

export default App;
