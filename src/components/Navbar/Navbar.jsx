import React from "react";
import { MdFavorite, MdLogout } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as authSlice from "../../redux/authSlice";
import "./navbar.scss";
import { logout } from "../../services/auth";

function Navbar() {
  const products = useSelector((state) => state.cart.products);
  const { userToken } = useSelector((state) => state.auth);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  return (
    <nav className="nav-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <p>GET FREE SHIPPING ON ALL ORDERS OVER THIS MONTH →</p>
      </div>

      {/* Main Navbar */}
      <div className="navbar">
        <div className="left">
          <Link className="logo link" to="/">
            CLOTHESBE
          </Link>
        </div>

        <div className="right">
          <div className="icons">
            {userToken ? (
              <NavLink
                to="/login"
                className="link"
                onClick={() => {
                  dispatch(authSlice.logout())
                  logout();
                }
                }
                aria-label="Logout"
              >
                <MdLogout className="icon" />
              </NavLink>
            ) : (
              <NavLink to="/login" className="link" aria-label="Login">
                <FaUserAlt className="icon" />
              </NavLink>
            )}

            <NavLink to="/wishlist" className="link" aria-label="Wishlist">
              <div className="nav-icon-badge">
                <MdFavorite className="icon" />
                {wishlistItems.length > 0 && userToken && (
                  <span className="badge-count">{wishlistItems.length}</span>
                )}
              </div>
            </NavLink>

            <NavLink to="/cart" className="link" aria-label="Cart">
              <div className="nav-icon-badge">
                <HiShoppingCart className="icon" />
                {products.length > 0 && userToken && (
                  <span className="badge-count">{products.length}</span>
                )}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
