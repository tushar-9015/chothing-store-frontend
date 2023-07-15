import React from 'react'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../redux/cartReducer'
import { removeWishlistItem } from '../../redux/wishlistReducer'
import "./wishlistCard.scss"

const WishlistCard = ({ item }) => {
  const title = item?.title ?? ''
  const desc = item?.desc ?? ''
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
      <div className="img-container">
        <img src={ process.env.REACT_APP_UPLOAD_URL + item?.img} alt='' />
      </div>
        <div className='details'>
          <h3>{toCapitalCase(title)}</h3>
            {/* <p>{item.desc?.substring(0, 100)}</p> */}
            <p>{toCapitalCase(desc)}</p>
          <div className="price">Price: ₹{item.price}</div>
          <button className='wishlistCard-btn'onClick={() => moveToCart()}>ADD TO CART</button>
          <button className='wishlistCard-btn' onClick={() => dispatch(removeWishlistItem({item_id: item.id}))}>REMOVE FROM WISHLIST</button>
        </div>
    </div>
  )
}

export default WishlistCard
