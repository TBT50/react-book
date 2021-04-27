import styled from "styled-components";
import Product from "../Product/Product";

const StyledProductList = styled.ul`
  margin: 30px 0;
`;

const ProductList = ({ productsList }) => {
  const handleProductVotes = (e) => {
    console.log(e);
  };

  return (
    <StyledProductList>
      {productsList.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          votes={product.votes}
          onVote={handleProductVotes}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
