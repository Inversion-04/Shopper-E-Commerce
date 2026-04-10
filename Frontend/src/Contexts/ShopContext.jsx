    import React , {createContext} from 'react'
   
    import Shop from '../Pages/Shop.jsx';
    import { useState,useEffect } from 'react';
    // Create a context for the shop for managing global state
    export const ShopContext = createContext(null);

       // we will create one empty cart by a function where key will be product id 
      // and value will be quantity of product

      // function to get the default cart
      const getDefaultCart = ()=>{
        let cart = {};
        // Initialize cart with product IDs and quantity 0
        for(let i=1; i<= 300; i++){
            cart[i] = 0;
            // assuming product IDs are 1-indexed set capacity of all products from 1 to 36 i.e length of all_products as 0
        }
        return cart;
        // return an object with product ids as key and quantity as value
      }

    export const ShopContextProvider = (props)=>{
       const[all_product,setAll_Product] = useState([])
       const [cartItems,setcartItems] = useState(getDefaultCart());
      
       // now cart items is state variable which will hold the cart items and setcartItems is function to update the cart items
       //it is accessible from any component wrapped inside this provider

      useEffect(()=>{
      
        // fetching all products from the database and storing it in the state variable all_product
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>{
          setAll_Product(data);
        })
        if(localStorage.getItem('auth-token')){
          fetch('http://localhost:4000/getcart',{
            method:'POST',
            headers:{
              Accept:'application/json',
              'Content-Type':'application/json',
              'auth-token':`${localStorage.getItem('auth-token')}`,
            },
            body:"",
          })
          .then((resp)=>resp.json())
          .then((data)=>{
            setcartItems(data);
          });
        }
      },[])
      
      const addToCart = (itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]: prev[itemId] + 1}));
        if(localStorage.getItem('auth-token')){
          fetch('http://localhost:4000/addtocart',{
            method:'POST',
            headers:{
              Accept:'application/json',
              'Content-Type':'application/json',
              'auth-token':`${localStorage.getItem('auth-token')}`,
            },
            body:JSON.stringify({"itemId" : itemId})
          })
          .then((resp)=>resp.json())
          .then((data)=>console.log(data));
        }
         
        // prev is previous state of cart items
        // we are using spread operator to copy the previous state and then updating the quantity of the item with itemId by 1
      }

      const removeFromCart = (itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]: Math.max(prev[itemId] - 1,0)}));
        // we are using Math.max to ensure that the quantity does not go below 0

        if(localStorage.getItem('auth-token')){
          fetch('http://localhost:4000/removefromcart',{
            method:'POST',
            headers:{
              Accept:'application/json',
              'Content-Type':'application/json',
              'auth-token':`${localStorage.getItem('auth-token')}`,
            },
            body:JSON.stringify({"itemId" : itemId})
          })
          .then((resp)=>resp.json())
          .then((data)=>console.log(data));
        }
         
      }
      const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
          if(cartItems[item] > 0){
            let itemInfo = all_product.find((product)=> product.id === Number(item));
            if(itemInfo){
            totalAmount += cartItems[item] * itemInfo.new_price;
            }
          }
        }
        return totalAmount;
      }
      const getTotalCartItems = ()=>{
        let totalItems = 0;
        for(const item in cartItems){
          if(cartItems[item]>0){
            totalItems+=cartItems[item];
          }
        }
        return totalItems;
      }

       const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems}; // Add any data or functions you want to provide and manage globally
 
       return(
    
        <ShopContext.Provider value={contextValue}>
            {props.children}             
        </ShopContext.Provider>
       )
    }

    //it allow to access the data and function from any component wrapped inside this provider
     // props.children represents the components that will be wrapped by this provider
    export default ShopContextProvider;