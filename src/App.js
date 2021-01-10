import React from "react";
import ProductList from "./ProductList";

class App extends React.Component {
  render() {
    const products = [
      {
        id: 1,
        title: "Item1",
        description: "Lorem ipsum dolor sit amet.",
        votes: Math.floor(Math.random() * 10),
      },
      {
        id: 2,
        title: "Item2",
        description: "Lorem ipsum dolor sit amet.",
        votes: Math.floor(Math.random() * 10),
      },
      {
        id: 3,
        title: "Item3",
        description: "Lorem ipsum dolor sit amet.",
        votes: Math.floor(Math.random() * 10),
      },
      {
        id: 4,
        title: "Item4",
        description: "Lorem ipsum dolor sit amet.",
        votes: Math.floor(Math.random() * 10),
      },
    ];

    return (
      <main>
        <h1 className="text-6xl text-center font-bold my-10">
          Popular Products
        </h1>
        <ProductList products={products} />
      </main>
    );
  }
}

export default App;
