import React, { useState } from 'react'
import { MdOutlineFavoriteBorder, MdOutlinePersonOutline, MdOutlineShoppingCartCheckout} from 'react-icons/md'
import './navbar.scss';
import {Link} from 'react-router-dom'
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import { useSelector } from "react-redux";

function Navbar() {
  const [open, setOpen] = useState({cart: false, wishlist: false});
  const products = useSelector((state) => state.cart.products);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  return (
    <nav className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <Link className='link' to='/products/1'>Women</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/2'>Men</Link>
          </div>
        </div>
        <div className='center'>
          <Link className='link' to='/'>ClothesBE</Link>
        </div>
        <div className='right'>
        <div className='icons'>
          <div className='icon'>
            <MdOutlinePersonOutline />
          </div>
          {/* wishlist-btn */}
          <div className='icon-wishlist' onClick={() => setOpen({cart:false, wishlist: open.wishlist ? false : true})}>
            <MdOutlineFavoriteBorder />
            <span>{wishlistItems.length}</span>
          </div>

            {/* cart-btn */}
          <div className='icon-cart' onClick={() => setOpen({cart: open.cart ? false: true, wishlist:false})}>
          <MdOutlineShoppingCartCheckout />
          <span>{products.length}</span>
          </div>
        </div>
        </div>
      </div>
      {/* {open && <Cart />} */}
      {open.cart && <Cart /> }
      {open.wishlist && <Wishlist /> }
    </nav>
  )
}

export default Navbar
