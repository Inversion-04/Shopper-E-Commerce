    import React from 'react'
    import './item.css'
    import { Link } from 'react-router-dom' 
    //item card component

    function Items(props) {
        // props received are id,name,image,new_price,old_price
    return (
        <div className='item'>
            {/*Link to product detail page using product id  window function help in ensuring when we click any 
            product we automatically reach to top*/}
           <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    {`$${props.new_price}`}
                </div>

                <div className="item-price-old">
                    {props.old_price}
                </div>
            </div>
        </div>
    )
    }
//props received are id,name,image,new_price,old_price
    export default Items