import React, { useEffect, useState } from 'react';
import './product.scss';
import { TiShoppingCart } from 'react-icons/ti';
import { MdOutlineFavorite } from 'react-icons/md';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { addToWishlist } from '../../redux/wishlistSlice';
import { getProduct } from '../../services/product';
import { upsertCart } from '../../services/cart';
import { addWishlist } from '../../services/wishlist';
import { upsertProduct } from '../../redux/productSlice';

const Product = () => {
  const { id: productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { userToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedProduct = useSelector((state) => {
    return state.product.products.find((x) => x._id === productId);
  });

  useEffect(() => {
    if (!selectedProduct && productId) {
      const fetchProduct = async () => {
        try {
          const product = await getProduct(productId);
          dispatch(upsertProduct({product}));
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
      fetchProduct();
    }
  }, [productId, selectedProduct, dispatch]);

  const handleWishlist = () => {
    if (!userToken) {
      return navigate('/login');
    }
  
    if (!selectedProduct) {
      return console.error("Invalid product");
    }
  
    addWishlist({ id: selectedProduct._id });
  
    dispatch(addToWishlist({
      id: selectedProduct._id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      img: selectedProduct.images?.url || '',
    }));
  };

  const handleCart = () => {
    if (!userToken) {
      return navigate('/login');
    }
  
    if (!selectedProduct || quantity <= 0) {
      return console.error("Invalid product or quantity");
    }
  
    upsertCart( selectedProduct._id, quantity );
  
    dispatch(addToCart({
      id: selectedProduct._id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      img: selectedProduct.images?.url || '',
      quantity,
    }));
  };

  return (
    <div className="product-container">
      <div className="product-left">
        <img
          src={selectedProduct?.images?.url || '/placeholder.jpg'}
          alt={selectedProduct?.name || 'Product Image'}
          className="product-image"
        />
      </div>
      <div className="product-right">
        <h1 className="product-title">{selectedProduct?.name}</h1>
        <p className="product-price">₹{selectedProduct?.price}</p>
        <p className="product-description">{selectedProduct?.description}</p>
        <p className="product-color">Color: {selectedProduct?.color}</p>

        <div className="product-quantity">
          <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <div className="product-actions">
          <button onClick={handleCart} className="cart-button">
            <TiShoppingCart /> Add to Cart
          </button>
          <button onClick={handleWishlist} className="wishlist-button">
            <MdOutlineFavorite /> Add to Wishlist
          </button>
        </div>

        <div className="product-info">
          <span>Category: {selectedProduct?.category}</span>
          <span>Product Type: {selectedProduct?.type}</span>
          <span>Tag: {selectedProduct?.tag}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;