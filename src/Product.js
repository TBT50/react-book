import React from "react";

class Product extends React.Component {
  render() {
    const { id, title, description, votes, onVote } = this.props;
    return (
      <li className="my-4 md:flex">
        <div>
          <img
            src={`https://picsum.photos/id/${id + 100}/400/400`}
            alt=""
            className="object-cover rounded-md"
            style={{ height: "180px" }}
          />
        </div>
        <div className="md:ml-8 flex flex-col justify-between">
          <div>
            <button type="button" onClick={() => onVote(id)}>
              Upvote
            </button>
            <span className="text-red-500 text-xl">{votes}</span>
          </div>
          <div>
            <h2 className="font-bold text-3xl">{title}</h2>
            <p>{description}</p>
          </div>
          <p className="text-sm text-gray-500 flex items-center">
            <span className="mr-2">Submitted by:</span>
            <a href="#">
              <img
                className="w-8"
                src={`https://eu.ui-avatars.com/api/?name=${title}+${description}`}
                alt={`Link to profile ${title} ${description}`}
              />
            </a>
          </p>
        </div>
      </li>
    );
  }
}

// const Product = (props) => {
//   console.log(this);
//   return (

//   );
// };

export default Product;
