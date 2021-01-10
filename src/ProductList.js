import Product from "./Product";

const ProductList = ({ products }) => {
  const sortedProducts = products.sort((a, b) => b.votes - a.votes);

  const handleProductUpVote = (productId) => {
    console.log(`${productId} was upvoted.`);
  };

  return (
    <ul className="container mx-auto my-10 px-3 flex flex-wrap justify-center md:flex-col md:flex-nowrap">
      {sortedProducts.map((product) => {
        return (
          <Product
            id={product.id}
            title={product.title}
            key={product.id}
            description={product.description}
            votes={product.votes}
            onVote={handleProductUpVote}
          />
        );
      })}
    </ul>
  );
};

export default ProductList;
