import React from 'react'
// import Cart from '../../components/Cart/Cart'
import CartCard from '../../components/CartCard/CartCard'
import CartSummary from '../../components/CartSummary/CartSummary'
import "./cartPage.scss"
import { useSelector } from 'react-redux'

const CartPage = () => {
  const products = useSelector((state)=>state.cart.products)
  return (
    // <div className='cartPage'>
    //   <h2>My Cart</h2>
    //   <Cart />
    // </div>
    <div className='cartPage'>
    <h2>My Cart</h2>
    <div className="cartPage-content">
    <div className="cart-left">
    {products && products.map((item, idx) => (
    <CartCard item={item} key={'cart-card'+ idx} />
      ))}
  </div>
  <div className="cart-right">
    <CartSummary />
  </div>
  </div>
  </div>
  )
}

export default CartPage;
