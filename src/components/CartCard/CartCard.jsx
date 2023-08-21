import React from 'react'
import "./cartCard.scss"
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/cartReducer'
import { addToWishlist } from '../../redux/wishlistReducer'

const CartCard = ({ item }) => {
  const title = item?.title ?? ''
  const desc = item?.desc ?? ''
    const dispatch = useDispatch()


    const moveToWishlist = () => {
        dispatch(addToWishlist({item}))
        dispatch(removeItem({item_id: item.id}))
    }
    console.log(item);
    
    

    const toCapitalCase = (sentence) => {
        const newSentence = sentence.length > 0 ? sentence[0].toUpperCase() + sentence.slice(1) : sentence;
        return newSentence;
    }
  return (
    <div className='cartCard'>
      <div className="img-container">
        <img src={ item?.img} alt='' />
      </div>
        <div className='details'>
          <h3>{toCapitalCase(title)}</h3>
            {/* <p>{item.desc?.substring(0, 100)}</p> */}
            <p>{toCapitalCase(desc)}</p>
          <div className='qty'>QTY: {item.quantity }</div>
          <div className="price">Price: ₹{item.price}</div>
          <button className='cartCard-btn'onClick={() => moveToWishlist()}>ADD TO WISHLIST</button>
          <button className='cartCard-btn' onClick={() => dispatch(removeItem({item_id: item.id}))}>REMOVE FROM CART</button>
        </div>
    </div>
  )
}

export default CartCard
