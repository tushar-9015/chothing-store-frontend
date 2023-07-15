import React from 'react'
import Cart from '../../components/Cart/Cart'
import "./cartPage.scss"

const cartPage = () => {
  return (
    <div className='cartPage'>
      <h2>My Cart</h2>
      <Cart />
    </div>
  )
}

export default cartPage;
