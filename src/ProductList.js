import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <ul className="container mx-auto my-10 px-3 flex flex-wrap justify-center md:flex-col md:flex-nowrap">
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
    </ul>
  );
};

export default ProductList;
