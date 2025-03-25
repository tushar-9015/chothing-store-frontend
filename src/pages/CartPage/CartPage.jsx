import React, { useEffect } from "react";
import CartCard from "../../components/CartCard/CartCard";
import CartSummary from "../../components/CartSummary/CartSummary";
import "./cartPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../services/cart";
import { resetCart, upsertCartProducts } from "../../redux/cartSlice";

const CartPage = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        dispatch(resetCart)
        const response = await getCart(); // Fetch cart data from backend
        dispatch(upsertCartProducts(response.cart.data)); // Update Redux state
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [dispatch]);

  return (
    <div className="cartPage">
      <h2>My Cart</h2>
      <div className="cartPage-content">
        <div className="cart-left">
          {products &&
            products.map((item, idx) => (
              <CartCard item={item} key={"cart-card" + idx} />
            ))}
        </div>
        <div className="cart-right">
          <CartSummary products={products} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
