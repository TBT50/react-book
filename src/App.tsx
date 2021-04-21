import React from "react";

import { AppContainer, ColumnContainer, ColumnTitle } from "./styles";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <AppContainer>
        <ColumnContainer>
          <ColumnTitle>1443</ColumnTitle>
        </ColumnContainer>
        <ColumnContainer>
          <ColumnTitle>123</ColumnTitle>
        </ColumnContainer>
        <ColumnContainer>
          <ColumnTitle>123</ColumnTitle>
        </ColumnContainer>
      </AppContainer>
    </>
  );
};

export default App;
