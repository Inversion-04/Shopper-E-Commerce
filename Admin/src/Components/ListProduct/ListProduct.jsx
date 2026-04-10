import React, { useEffect } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/Admin_Assets/cross_icon.png'
function ListProduct() {
  const[allProducts,setAllProducts] = React.useState([]);
  const fetchInfo = async()=>{
    // fetching all the products from the backend and then we will show them in the frontend get request
    await fetch('http://localhost:4000/allproducts')
    .then((response)=>response.json())
    .then((data)=>{setAllProducts(data)}) 
  }

  useEffect(()=>{
    fetchInfo(); 
  },[])
  const remove_product = async (id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      // type of request
      method:'POST',
      // headers are extra information that we send to the server along with the request body
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      //body is used to send data to backend 
      body:JSON.stringify({id:id})
    })
    await fetchInfo(); // after removing the product we will fetch the updated list of products from the backend and show them in the frontend
  }
  return (
    <div className="list-product">
       <h1>All Products List</h1>
       <div className="list-product-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
       </div>
       <div className="list-product-allproducts">
        <hr />
        {/* // here we will map all the products and show them in this format  */}
        {allProducts.map((product,index)=>(
  <React.Fragment key={product.id}>
    <div className="list-product-format-main list-product-format">
      <img src={product.image} alt="" className="list-product-product-icon" />
      <p>{product.name}</p>
      <p>${product.old_price}</p>
      <p>${product.new_price}</p>
      <p>{product.category}</p>
      <img
        className="list-product-remove-icon"
        src={cross_icon}
        alt=""
        onClick={()=>remove_product(product.id)}
      />
    </div>
    <hr/>
  </React.Fragment>
))}
       </div>
    </div>
  )
}

export default ListProduct