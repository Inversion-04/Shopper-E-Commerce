import React from 'react'
import './DescriptionBox.css'
function DescriptionBox() {
  return (
    <div className='descriptionbox'>
     <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
         <div className="descriptionbox-nav-box fade">Reviews(122)</div>
     </div>
      <div className="descriptionbox-description">
        <p>An E-Commerce website is an online platform that facilitates the buying and selling of products or services over the internet. 
          It serves as a virtual marketplace where businesses and individuals showcase their products, interact with customers, 
          and conduct transactions without the need for a physical presence. E-Commerce websites have gained immense popularity due to the convenience, accessibility, 
          and global reach they offer.
        </p>
        <p>
          E-Commerce websites typically feature a user-friendly interface that allows customers to browse through a wide range of products,
          view detailed product descriptions, prices , and make purchases with just a few clicks. They often include features such as search functionality,
          product categorization, customer reviews, and secure payment gateways to enhance the shopping experience.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox