import React from "react";
import ContainerOuter from "./ContainerOuter";
import Container from "./Container";

import "./styles/normalize.css";
import { PureFunc } from "../types/react";
import LogoContainer from "./LogoContainer";

const App = (): PureFunc => {
  return (
    <ContainerOuter>
      <Container>
        <LogoContainer></LogoContainer>
      </Container>
    </ContainerOuter>
  );
};

export default App;
