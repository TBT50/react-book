import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import { Container } from "./styles";

const products = [
  {
    id: 1,
    name: "Vacuum cleaner",
    description: "So fucking freaking awesome!",
    votes: 22,
  },
  {
    id: 2,
    name: "Telephone",
    description: "Never buy this shit, really",
    votes: 33,
  },
  {
    id: 3,
    name: "Carpet",
    description: "Wow, such a nice carpet, wow",
    votes: 11,
  },
];

function App() {
  const [productsList, setProductsList] = useState(products);

  const sortProducts = (sortProperty) => {
    const sortedProducts = [...productsList].sort(
      (a, b) => a[sortProperty] - b[sortProperty]
    );
    setProductsList(sortedProducts);
  };

  return (
    <Container>
      <header className="App-header">
        <h1>Popular Products</h1>
        <ProductList productsList={productsList} />
        <select onChange={(e) => sortProducts(e.target.value)}>
          <option value="id">ID</option>
          <option value="votes">votes</option>
        </select>
      </header>
    </Container>
  );
}

export default App;
