import React from "react";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>VERCEL</h1>
      </header>
      <ul>
        <ListItem car="Ferrari" />
        <ListItem car="Mercedes" />
        <ListItem car="Renault" />
        <ListItem car="RedBull" />
        <ListItem car="Mclaren" />
        <ListItem car="AlphaTauri" />
      </ul>
      <main>This is the main content</main>
      <footer>This is the footer</footer>
    </div>
  );
}

export default App;
