const Product = ({ id, title, description }) => {
  return (
    <li className="my-3 md:flex items-center">
      <div>
        <img
          src={`https://picsum.photos/id/${id}/400/400`}
          alt=""
          className="object-cover"
          style={{ height: "180px" }}
        />
      </div>
      <div className="md:ml-8">
        <h2 className="font-bold text-3xl">{title}</h2>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default Product;
