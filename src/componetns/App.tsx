import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ContainerOuter from "./ContainerOuter";
import { PureFunc } from "../types/react";
import Router, { Routes } from "./Router";

import "./styles/normalize.css";
import "../assets/fonts/font.css";

const App = ({ location, history }: RouteComponentProps): PureFunc => {
  return (
    <ContainerOuter>
      <Router />
    </ContainerOuter>
  );
};

export default withRouter(App);
