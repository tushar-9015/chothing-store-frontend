import React from 'react'
import './wishlist.scss'
import { MdDeleteOutline, MdOutlineShoppingCartCheckout } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'
import { useParams } from 'react-router-dom';
import { removeWishlistItem, resetWishlist } from '../../redux/wishlistReducer'
import useFetch from '../../hooks/useFetch'

const Wishlist = () => {
    const id = useParams().id
    const dispatch = useDispatch()
    let  data,  error , loading;
     
  ({data, loading, error} = useFetch(
            `/products/${id}?populate=*`
          ));
    
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems)

    const moveToCart = (item) => {
       dispatch(addToCart({...item, quantity: 1}))
       dispatch(removeWishlistItem(item.id))
    
  }
  return (
    
    <div className='wishlist'>
        <h1>Products in your Wishlist</h1>
        {wishlistItems?.map((item) => (
            <div className='wishlist-item' key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
                <div className='wishlist-details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className='wishlist-price'> ₹{item.price}</div>
                </div>
                <MdDeleteOutline className='wishlist-delete' onClick={() => dispatch(removeWishlistItem(item.id))} />
                <MdOutlineShoppingCartCheckout className='add-to-cart' onClick={() => moveToCart(item)}/>
            </div>
        ))}
        <span className='wishlist-reset' onClick={()=> dispatch(resetWishlist())}> RESET WISHLIST</span>
    </div>
  )
}

export default Wishlist
