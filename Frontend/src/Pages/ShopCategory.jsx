import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Contexts/ShopContext.jsx'
import dropdown_icon from '../Components/Assets/Frontend_Assets/dropdown_icon.png'
import Items from '../Components/Items/Items.jsx'

function ShopCategory(props) {

  const { all_product} = useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img className = 'shopcategory-banner' src={props.banner} alt="" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out Of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            )
          }
          return null
        })}
      </div>
      {/* load more button */}
      <div className="explore-section">
  <h2>Discover Your Style</h2>
  <p>Find the latest trends and upgrade your wardrobe with premium collections</p>

  <div className="explore-features">
    <div className="feature-card">
      <h3>🔥 Trending</h3>
      <p>Latest fashion styles curated just for you</p>
    </div>

    <div className="feature-card">
      <h3>🚚 Fast Delivery</h3>
      <p>Quick and reliable delivery at your doorstep</p>
    </div>

    <div className="feature-card">
      <h3>💎 Premium Quality</h3>
      <p>Top quality products with best pricing</p>
    </div>
  </div>

    <button className="explore-btn">
        Explore More →
    </button>
</div>
    </div>
  )
}

//props are banner,category
export default ShopCategory
