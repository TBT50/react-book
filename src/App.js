import React from "react";
import ProductList from "./ProductList";

class App extends React.Component {
  render() {
    const products = [
      {
        id: 1,
        title: "Item1",
      },
      {
        id: 2,
        title: "Item2",
      },
      {
        id: 3,
        title: "Item3",
      },
    ];

    return (
      <main>
        <h1>Popular Products</h1>
        <ProductList products={products} />
      </main>
    );
  }
}

export default App;
