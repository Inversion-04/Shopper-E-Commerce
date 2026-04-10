    import React from 'react'
    import './Popular.css'
    import Items from '../Items/Items.jsx'
    import {useState,useEffect} from 'react'
    // popular section to show popular items
    //the data is already present in data_products.json file
    //it is accessed by items component via props

    // mapping through the data_products array to get each item details
    // and passing it to Item component
    function Popular() {
        const[popularProducts,setPopularProducts] = useState([])
        // states for setting fetched popular products for women from backend
        useEffect(()=>{
            fetch('http://localhost:4000/popularInWomen')
            .then((resp)=>resp.json())
            .then((data)=>setPopularProducts(data));
        },[])
    return (
        <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {popularProducts.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} 
                image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        </div>
    )
    }

    //props are id,name,image,new_price,old_price

    export default Popular