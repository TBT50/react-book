import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <Product
            id={product.id}
            title={product.title}
            key={product.id}
            description={product.description}
          />
        );
      })}
    </>
  );
};

export default ProductList;
