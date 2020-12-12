const Product = ({ title, id }) => {
  return (
    <li>
      <div>
        <img src={`https://picsum.photos/id/${id}/400/400`} alt="" />
      </div>
      <p>{title}</p>
    </li>
  );
};

export default Product;
