import React from 'react'
import { ShopContext } from '../Contexts/ShopContext.jsx'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.jsx'
function Product() {
  const {all_product} = useContext(ShopContext);
  // Getting productId from URL parameters
  const{productId} = useParams();
  // Finding the product based on productId
  const product = all_product.find((product)=> product.id === parseInt(productId));

  return (
    <div>
      {/* // Breadcrum component showing navigation path  */}
      {/* // product prop is passed to Breadcrum component */}
      <Breadcrum product={product} />
      <ProductDisplay  product = {product}/>
      {/*Description box component for additional product details */}
      <DescriptionBox/>
       {/*it wills show the related products */}
      <RelatedProducts />
    </div>
  )
}

export default Product