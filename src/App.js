import { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

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

  const sortProducts = (type) => {
    const types = {
      id: "id",
      votes: "votes",
    };

    const sortProperty = types[type];
    const sortedProducts = [...productsList].sort(
      (a, b) => a[sortProperty] - b[sortProperty]
    );

    setProductsList(sortedProducts);
  };
  return (
    <div className="App">
      <header className="App-header">
        <ProductList productsList={productsList} />
        <select onChange={(e) => sortProducts(e.target.value)}>
          <option value="id">ID</option>
          <option value="votes">votes</option>
        </select>
      </header>
    </div>
  );
}

export default App;
