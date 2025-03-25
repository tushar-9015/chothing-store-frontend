import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { removeWishlistItem } from '../../redux/wishlistSlice'
import "./wishlistCard.scss"
import {TiShoppingCart } from 'react-icons/ti';
import { MdOutlineRemoveCircleOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { getWishlist } from '../../services/wishlist'

const WishlistCard = ({ item }) => {
  const title = item?.name ?? ''
  const desc = item?.description ?? ''
  const dispatch = useDispatch()


    const moveToCart = () => {
        dispatch(addToCart({item}))
        dispatch(removeWishlistItem({item_id: item.id}))
    }
    console.log(item);

    const toCapitalCase = (sentence) => {
        const newSentence = sentence.length > 0 ? sentence[0].toUpperCase() + sentence.slice(1) : sentence;
        return newSentence;
    }
  return (
   
    <div className='wishlistCard'>
       <Link className="link" to={`/product/${item.id}`}>
      <img className='img'src={ item?.img} alt='' />
      </Link>
        <div className='details'>
          <h3>{toCapitalCase(title)}</h3>
            {/* <p>{item.desc?.substring(0, 100)}</p> */}
            <p>{toCapitalCase(desc)}</p>
          <div className="price">Price: ₹{item.price}</div>
          <div className="buttons">
          {/* <button className='wishlistCard-btn'onClick={() => moveToCart()}>ADD TO CART</button>
          <button className='wishlistCard-btn' onClick={() => dispatch(removeWishlistItem({item_id: item.id}))}>REMOVE FROM WISHLIST</button> */}
          <button
              className="add"
              onClick={() => moveToCart()}
            >
              <TiShoppingCart /> ADD TO CART
            </button>
            <button
              className="add"
              onClick={() => dispatch(removeWishlistItem({item_id: item.id}))}
            >
             <MdOutlineRemoveCircleOutline /> REMOVE 
            </button>
          </div>

        </div>
    </div>

  )
}

export default WishlistCard
