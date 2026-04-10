import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/Frontend_Assets/star_icon.png'
import star_dull_icon from '../Assets/Frontend_Assets/star_dull_icon.png'
import {useContext} from 'react'
import {ShopContext} from '../../Contexts/ShopContext.jsx'
const API_URL = import.meta.env.VITE_API_URL; // accessing the API URL from environment variable

const ProductDisplay = (props) => {
  const{product} = props 
 const{addToCart} = useContext(ShopContext)
 // here props passed are product which contains all the details of the product to be displayed
  return (
    <div className="productdisplay">

      {/* LEFT SIDE */}
      <div className="productdisplay-left">

        {/* Thumbnails */}
        <div className="productdisplay-img-list">
          <img src={`${API_URL}/images/${product.image}`} alt="" />
          <img src={`${API_URL}/images/${product.image}`} alt="" />
          <img src={`${API_URL}/images/${product.image}`} alt="" />
          <img src={`${API_URL}/images/${product.image}`} alt="" />
        </div>

        {/* Main Image */}
        <div className="product-display-image">
          <img
            className="productdisplay-main-img"
            src={`${API_URL}/images/${product.image}`}
            alt=""
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="productdisplay-right">

        {/* Product Title */}
        <h1>{product.name}</h1>

        {/* Rating */}
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        {/* Price */}
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>

        {/* Description */}
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and
          typically with short sleeves and a round neckline.
        </div>

        {/* Size */}
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        {/* Button */}
        <button onClick={() => addToCart(product.id)}>
           ADD TO CART
        </button>


        {/* Meta */}
        <p className="productdisplay-right-category">
          <span>Category:</span> Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
