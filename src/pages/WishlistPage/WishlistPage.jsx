import React from 'react'
import Wishlist from '../../components/Wishlist/Wishlist'
import "./wishlistPage.scss"

const WishlistPage = () => {
  return (
    <div className='wishlistPage'>
      <h2>My Cart</h2>
      <Wishlist />
      {/* <h1>mngo</h1> */}
    </div>
  )
}

export default WishlistPage
