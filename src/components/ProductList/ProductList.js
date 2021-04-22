import styled from "styled-components";
import Product from "../Product/Product";

const S = {};
S.ProductList = styled.ul`
  grid-template-columns: 1fr 1fr 1fr;
`;

const ProductList = ({ productsList }) => {
  const handleProductVotes = (e) => {
    console.log(e);
  };

  return (
    <S.ProductList>
      {productsList.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          votes={product.votes}
          onVote={handleProductVotes}
        />
      ))}
    </S.ProductList>
  );
};

export default ProductList;
