import React from "react";
import "./App.css";

import {
  Container,
  AppContainer,
  ColumnContainer,
  ColumnTitle,
  CardContainer,
} from "./styles";

import { Column } from "./components/Column";
import { Card } from "./components/Card";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <h1>Awesome app</h1>
      </Container>

      <Container>
        <AppContainer>
          <Column text={"Column1"}>
            <ul>
              <Card text="Go for a walk" />
            </ul>
          </Column>
          <Column text={"Column2"}>
            <ul>
              <Card text="Learn Typescript" />
            </ul>
          </Column>
          <Column text={"Column3"}>
            <ul>
              <Card text="Learn Italian" />
            </ul>
          </Column>
        </AppContainer>
      </Container>
    </div>
  );
};
