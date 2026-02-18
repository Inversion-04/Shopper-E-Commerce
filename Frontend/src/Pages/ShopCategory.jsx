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
      <div className="shopcategory-loadmore">
         Explore More
      </div>
    </div>
  )
}

//props are banner,category
export default ShopCategory
