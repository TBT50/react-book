import Product from "./../Product/Product";

const ProductList = ({ people }) => {
  return (
    <>
      {people.map((person) => (
        <Product person={person} key={person.name} />
      ))}
    </>
  );
};

export default ProductList;
