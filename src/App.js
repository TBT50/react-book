import { Container } from "@material-ui/core";
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
        <Container>
          <h1>Popular Products</h1>
          <ProductList products={products} />
        </Container>
      </main>
    );
  }
}
// function App() {
//   const products = [
//     {
//       id: 1,
//       title: "Item1",
//     },
//     {
//       id: 2,
//       title: "Item2",
//     },
//     {
//       id: 3,
//       title: "Item3",
//     },
//   ];

//   return (
//     <main>
//       <Container>
//         <h1>Popular Products</h1>
//         <ProductList products={products} />
//       </Container>
//     </main>
//   );
// }

export default App;
