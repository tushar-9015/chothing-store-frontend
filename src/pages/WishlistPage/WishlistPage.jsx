import React from 'react'
import { useSelector } from 'react-redux'
import WishlistCard from '../../components/WishlistCard/WishlistCard'
import "./wishlistPage.scss"

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems)
  return (
    <div className='wishlistPage'>
      <h2>My Wishlist</h2>
      <div className="wishlist-wrapper">
      {wishlistItems && wishlistItems.map((item, idx) => (
        <WishlistCard item={item} key={'wishlist-card'+ idx} />
          ))}
      </div>
    </div>
  )
}

export default WishlistPage