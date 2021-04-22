import Product from "./Product";

const ProductList = ({ productsList }) => (
  <ul>
    {productsList.map((product) => (
      <Product key={product.id} name={product.name} votes={product.votes} />
    ))}
  </ul>
);

export default ProductList;
