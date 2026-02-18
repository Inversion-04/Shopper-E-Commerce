import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/Frontend_Assets/data.js'
import Items from '../Items/Items.jsx'
function RelatedProducts() {
  return (
    // RELATED PRODUCTS SECTION
    <div className='relatedproducts'>
         <h1>Related Products</h1>
         {/*LINE */}
         <hr />
         <div className="relatedproducts-item">
            {/*MAPPING RELATED PRODUCTS DATA */}
             {data_product.map((item,i)=>{
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
             })}
         </div>
    </div>
  )
}

export default RelatedProducts