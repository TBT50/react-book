const Product = ({ name, votes }) => {
  return (
    <li>
      <p>
        Name: <span>{name}</span>
      </p>
      <p>
        Votes: <span>{votes}</span>
      </p>
    </li>
  );
};

export default Product;
