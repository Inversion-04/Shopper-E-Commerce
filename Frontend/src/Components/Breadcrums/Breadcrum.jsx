  import React from 'react'
  import './Breadcrum.css'
  import arrow_icon from '../Assets/Frontend_Assets/breadcrum_arrow.png'
  function Breadcrum(props) {
    // props received are product  
    const{product} = props;

    return(
      // Breadcrum navigation path display
      <div className = 'breadcrum'>
        HOME <img src={arrow_icon} alt="" /> 
       SHOP <img src={arrow_icon} alt="" /> 
       {product.category.toUpperCase()} 
       <img src={arrow_icon} alt="" /> 
       {product.name}
      </div>
    )
  }

  export default Breadcrum