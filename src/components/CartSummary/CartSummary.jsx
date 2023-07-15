import React from 'react'
import { useSelector } from 'react-redux'
import "./cartSummary.scss"


const CartSummary = () => {
    const products = useSelector((state)=>state.cart.products)
    
  const totalPrice = () => {
    let total = 0;
    products.forEach((item)=> (total += item.quantity*item.price));
    return total.toFixed(2);
  }
  return (
    <div className='cart-summary'>
        <h2>Your Order</h2>
        <div className='price-detail-col'>
        <p className="price-detail-row">
            <span>{products.length > 1 ? "UNIQUE ITEMS:" : "UNIQUE ITEM:" }</span>
            <span>({products.length}{products.length > 1 ? " items" : " item" })</span>
        </p>
        <p className="price-detail-row">
            <span>Total MRP:</span>
            <span>{totalPrice()}</span>
        </p>
        <p className="price-detail-row">
            <span>Delivery Charges:</span>
            <span className="delivery-charges">Free</span>
        </p>
        <hr />
        <p className="price-detail-row total-amount">
           <span>Total Amount:</span> <span>₹{totalPrice()}</span>
        </p>
        <button className='checkout-btn'>PROCEED TO CHECKOUT</button>
        </div>
    </div>
  )
}

export default CartSummary
