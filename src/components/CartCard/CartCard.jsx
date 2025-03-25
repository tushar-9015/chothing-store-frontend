import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/cartSlice';
import { addToWishlist } from '../../redux/wishlistSlice';
import { MdOutlineFavorite, MdOutlineRemoveCircleOutline } from 'react-icons/md';
import "./cartCard.scss";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const moveToWishlist = () => {
    dispatch(addToWishlist(item));
    dispatch(removeItem(item.id));
  };

  return (
    <div className='cartCard'>
      <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt={item.title} />
      <div className='details'>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className='qty'>QTY: {item.quantity}</div>
        <div className='price'>Price: ₹{item.onSale ? item.salePrice : item.price}</div>
        <div className='buttons'>
          <button className='cartCard-btn' onClick={moveToWishlist}>
            <MdOutlineFavorite /> ADD TO WISHLIST
          </button>
          <button className='cartCard-btn' onClick={() => dispatch(removeItem(item.id))}>
            <MdOutlineRemoveCircleOutline /> REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;