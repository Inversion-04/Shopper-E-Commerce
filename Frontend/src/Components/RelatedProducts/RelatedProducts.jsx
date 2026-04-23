import React, { useState, useEffect } from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/Frontend_Assets/data.js'
import Items from '../Items/Items.jsx'
const API_URL = import.meta.env.VITE_API_URL;

function RelatedProducts() {
  const[relatedProducts, setRelatedProducts] = useState([])
  useEffect(()=>{
      fetch(`${API_URL}/relatedproducts`)
      .then((resp)=>resp.json())
      .then((data)=>setRelatedProducts(data));
  },[])

  return (
    
    // RELATED PRODUCTS SECTION
    <div className='relatedproducts'>
         <h1>More Products</h1>
         {/*LINE */}
         <hr />
         <div className="relatedproducts-item">
            {/*MAPPING RELATED PRODUCTS DATA */}
             {relatedProducts.map((item,i)=>{
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