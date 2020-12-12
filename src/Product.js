const Product = ({ id, title, description }) => {
  return (
    <li>
      <div>
        <img src={`https://picsum.photos/id/${id}/400/400`} alt="" />
      </div>
      <p>{title}</p>
      <p>{description}</p>
    </li>
  );
};

export default Product;
