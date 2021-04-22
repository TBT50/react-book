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
  return (
    <div className="App">
      <header className="App-header">
        <ProductList />
        <button type="button">SORT</button>
      </header>
    </div>
  );
}

export default App;
