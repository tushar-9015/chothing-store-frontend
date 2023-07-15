import React from 'react'
import './cart.scss'
import { useSelector } from 'react-redux'

import CartCard from '../CartCard/CartCard'
import CartSummary from '../CartSummary/CartSummary'



const Cart = () => {
  const products = useSelector((state)=>state.cart.products)

  // const storage = JSON.parse(localStorage.getItem('persist:root')) 
  // const cart = storage ? JSON.parse(storage.cart) : {products: []}
  // console.log(cart, typeof cart);

 
  return (
    <div className='cart'>
      <div className="cart-left">
        {products && products.map((item, idx) => (
        <CartCard item={item} key={'cart-card'+ idx} />
          ))}
      </div>
      <div className="cart-right">
        <CartSummary />
      </div>
      
    </div>
    // <div className='cart'>
    //   <h1>My Cart</h1>
    //   <div className='item-container'>
    //   {products?.map((item) => (
    //     <div className='item' key={item.id}>
    //       <div className='img-container'>
    //       <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
    //       </div>
    //       <div className='details'>
    //          <h1>{item.title}</h1>
    //          <p>{item.desc?.substring(0, 100)}</p>
    //          <div className='price'>{item.quantity } x ₹{item.price}</div>
    //       </div>
    //       <MdDeleteOutline className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
    //     </div>
    //   ))}
    //   </div>
    //   <div className='total'>
    //     <span>SUBTOTAL</span>
    //     <span>₹{totalPrice()}</span>
    //   </div>
    //   <button >PROCEED TO CHECKOUT</button>
    //   <span className='reset'onClick={()=>dispatch(resetCart())}>
    //     RESET CART
    //   </span>
    // </div>
  )
}

export default Cart
