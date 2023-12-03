import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const img1 = item.attributes?.img?.data?.attributes;
  const img2 = item.attributes?.img2?.data?.attributes;
  // console.log(item);
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={img1?.url}
            alt={item.attributes.description}
            className="mainImg"
          />
          <img
            src={img2.url}
            alt={item.attributes.description}
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>₹{item.oldPrice || item?.attributes.price + 100}</h3>
          <h3>₹{item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
