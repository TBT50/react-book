import React from "react";
import "./App.css";

import { Container, AppContainer } from "./styles";

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
          <Column text={"To do"}>
            <ul>
              <Card text="Go for a walk" />
            </ul>
          </Column>
          <Column text={"In progess"}>
            <ul>
              <Card text="Learn Typescript" />
            </ul>
          </Column>
          <Column text={"Done"}>
            <ul>
              <Card text="Learn Italian" />
            </ul>
          </Column>
        </AppContainer>
      </Container>
    </div>
  );
};
