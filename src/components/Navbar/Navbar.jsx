import React from 'react'
import { MdFavorite, MdLogout} from 'react-icons/md'
import { FaUserAlt} from 'react-icons/fa'
import { HiShoppingCart} from 'react-icons/hi'
import './navbar.scss';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { logout  } from '../../redux/authSlice';

function Navbar() {
  const products = useSelector((state) => state.cart.products);
  const { userToken } = useSelector((state) => state.auth)
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch()
  return (
    <nav className='navbar'>
      <div className='wrapper'>
        <div className='left'>
        </div>
        <div className='center'>
          <Link className='link' to='/'>ClothesBE</Link>
        </div>
        <div className='right'>
        <div className='icons'>
          <div className='icon'>
          {userToken ? (
            <NavLink
              to="./login"
              className="link"
              onClick={() => dispatch(logout())}
            >
              <span className="badge nav-icon-badge">
                <MdLogout />
              </span>
            </NavLink>
          ) : (
            <NavLink
              to="./login"
              className="link"
            >
              <span className="badge nav-icon-badge">
                <FaUserAlt />
              </span>
            </NavLink>
          )}
        </div>
            
          {/* <Link className='link' to="./login"><MdOutlinePersonOutline onClick={()=>dispatch(logout())} /></Link>
          </div> */}
          {/* wishlist-btn */}
          <NavLink
           to="./wishlist"
           className="link"
           >
            <span className="badge nav-icon-badge">
              <MdFavorite />
              {wishlistItems.length !== 0 && userToken && (
                <span className="badge-count">{wishlistItems.length}</span>
              )}
            </span>
           </NavLink>
          {/* <div className='icon-wishlist' onClick={() => setOpen({cart:false, wishlist: open.wishlist ? false : true})}>
            <MdFavorite />
            <span>{wishlistItems.length}</span>
          </div> */}

          <NavLink
           to="./cart"
           className="link"
           >
            <span className="badge nav-icon-badge">
              <HiShoppingCart />
              {products.length !== 0 && userToken && (
                <span className="badge-count">{products.length}</span>
              )}
            </span>
           </NavLink>

            {/* cart-btn */}
          {/* <div className='icon-cart' onClick={() => setOpen({cart: open.cart ? false: true, wishlist:false})}>
          <HiShoppingCart/>
          <span>{products.length}</span>
          </div> */}
        </div>
      </div>
      </div>
      {/* {open && <Cart />} */}
      {/* {open.cart && <Cart /> }
      {open.wishlist && <Wishlist /> } */}
    </nav>
  )
}

export default Navbar


