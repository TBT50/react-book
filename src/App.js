import "semantic-ui-css/semantic.min.css";

import ProductCard from "./ProductCard";

function App() {
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
      <h1>Product Hunt</h1>
      {products.map((product) => (
        <ProductCard title={product.title} key={product.id} id={product.id} />
      ))}
    </main>
  );
}

export default App;
