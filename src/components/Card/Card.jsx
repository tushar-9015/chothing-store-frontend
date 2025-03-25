import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { upsertProduct } from "../../redux/productSlice";

const Card = ({ item }) => {
  const img = item?.images?.url;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(upsertProduct({ id: item._id })); // Fixed payload
  };

  return (
    <div className="card" onClick={handleClick}>
      <Link className="link" to={`/product/${item._id}`}>
        {/* Image Section */}
        <div className="image-container">
          <img
            src={img}
            alt={item?.description || "Product image"}
            className="product-image"
          />
        </div>
        {/* Product Information Section */}
        <div className="card-content">
          <h2 className="product-title">{item?.name}</h2>
          <div className="price-info">
            {item.salePrice && <span className="old-price">₹{item.salePrice}</span>}
            <span className="current-price">₹{item?.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
