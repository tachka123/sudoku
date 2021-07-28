import React from "react";
import ContainerOuter from "./ContainerOuter";
import Container from "./Container";
import { PureFunc } from "../types/react";
import LogoContainer from "./LogoContainer";

import "./styles/normalize.css";

const App = (): PureFunc => {
  return (
    <ContainerOuter>
      <Container>
        <LogoContainer />
      </Container>
    </ContainerOuter>
  );
};

export default App;
