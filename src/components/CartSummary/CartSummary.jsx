import React from 'react';
import "./cartSummary.scss";

const CartSummary = ({ products = [] }) => {  // Default value to prevent undefined error
  const totalPrice = () => {
    return products.reduce((total, item) => {
      const price = item.onSale ? item.salePrice : item.price;
      return total + item.quantity * price;
    }, 0).toFixed(2);
  };

  return (
    <div className='cart-summary'>
      <h2>Your Order</h2>
      <div className='price-detail-col'>
        <p className='price-detail-row'>
          <span>{products.length === 1 ? "UNIQUE ITEM:" : "UNIQUE ITEMS:"}</span>
          <span>({products.length} {products.length === 1 ? "item" : "items"})</span>
        </p>
        <p className='price-detail-row'>
          <span>Total MRP:</span>
          <span>₹{products.length > 0 ? totalPrice() : "0.00"}</span>
        </p>
        <p className='price-detail-row'>
          <span>Delivery Charges:</span>
          <span className='delivery-charges'>Free</span>
        </p>
        <hr />
        <p className='price-detail-row total-amount'>
          <span>Total Amount:</span> <span>₹{products.length > 0 ? totalPrice() : "0.00"}</span>
        </p>
        <button className='checkout-btn' disabled={products.length === 0}>
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
