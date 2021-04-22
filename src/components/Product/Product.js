import "./Product.scss";

const Product = ({ id, name, votes, onVote }) => {
  return (
    <li className="product-list__item">
      <div className="product-list__img-wrapper">
        <img src="" alt="" className="product-list__img" />
      </div>
      <div className="product-list__content">
        <h2 className="product-list__header">{name}</h2>
        <p className="product-list__votes">
          Votes: <span>{votes}</span>
        </p>
        <button type="button" onClick={() => onVote(id)}>
          Increment Votes
        </button>
      </div>
    </li>
  );
};

export default Product;
