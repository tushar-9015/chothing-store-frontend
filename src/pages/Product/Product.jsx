import React, { useState } from 'react'
import './product.scss'
import {TiShoppingCart } from 'react-icons/ti';
import { MdOutlineFavorite } from 'react-icons/md'
import useFetch from '../../hooks/useFetch';
import { useParams, useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cartReducer';
import { addToWishlist } from '../../redux/wishlistReducer';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState("img")
  const [quantity, setQuantity] = useState(1)
  const {userToken} = useSelector((state)=> state.auth);
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(
    `/products/${id}?populate=*`
  )

  const toggleWishlist =() => {
    if(!userToken) {
      navigate("/login")
      return ;
    } else {
      dispatch(
        addToWishlist({
         item:
          {
          id: data.id,
          title: data.attributes.title,
          desc: data.attributes.desc,
          price: data.attributes.price,
          img: data.attributes.img.data.attributes.url,
          }
        })
      )
    }
  }

  const toggleCart =() => {
    if(!userToken) {
      navigate("/login")
      return ;
    } else {
      dispatch(
        addToCart({
          item: 
          {
          id: data.id,
          title: data.attributes.title,
          desc: data.attributes.desc,
          price: data.attributes.price,
          img: data.attributes.img.data.attributes.url,
          quantity,
          }
        })
      )
    }
  }
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">₹{data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <div className='move-to'>
            <button
              className="add"
              onClick={toggleCart}
            >
              <TiShoppingCart /> ADD TO CART
            </button>
            <button
              className="add"
              onClick={toggleWishlist}
            >
              <MdOutlineFavorite /> ADD TO WISHLIST
            </button>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Product
