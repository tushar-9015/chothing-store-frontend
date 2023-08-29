import React from 'react'
import { useSelector } from 'react-redux'
import WishlistCard from '../WishlistCard/WishlistCard'


const Wishlist = () => {
    const wishlistItems = useSelector((state)=>state.wishlist.wishlistItems)
  return (
    <>
      <div className="wishlist-wrapper">
      {wishlistItems && wishlistItems.map((item, idx) => (
        <WishlistCard item={item} key={'wishlist-card'+ idx} />
          ))}
      </div>
    </>
  )
}

export default Wishlist
