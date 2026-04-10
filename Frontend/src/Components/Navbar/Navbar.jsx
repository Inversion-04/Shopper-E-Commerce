      import React, { use, useState } from 'react'
      import './Navbar.css'
      import logo from '../Assets/Frontend_Assets/logo.png'
      import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
      import { Link } from 'react-router-dom'
      import { useContext } from 'react'
      import { useRef } from 'react'
      import nav_dropdown from '../Assets/Frontend_Assets/nav_dropdown.png'
      import { ShopContext } from '../../Contexts/ShopContext.jsx'
      function Navbar() {
        const[menu,setMenu] = useState("shop");
        const{getTotalCartItems} = useContext(ShopContext);
        const menuRef = useRef();
              const{user} = useContext(ShopContext)
        // function to toggle dropdown menu on small screens
        const dropdown_toggle = (e)=>{
          menuRef.current.classList.toggle("nav-menu-visible");
          e.target.classList.toggle('open')
        }
        return (
          <div className = 'navbar'>
            <div className="nav-logo">
              <img src={logo} alt="" />
              <p>SHOPPER</p>
            </div>
            <img className='nav_dropdown' onClick={dropdown_toggle}src={nav_dropdown} alt="" />
            {/* // menuRef is used to refer to the ul element for dropdown functionality */}
            <ul ref = {menuRef} className="nav-menu">
              {/* here we do condiitonal rendering if our state matches we render red line i.e hr 
              tag else we will not render */}

              {/* Linking nav bar with routes */}

              <li onClick={()=>setMenu("shop")}><Link style={{textDecoration : 'none'}} to='/'>Shop</Link>{menu === "shop" ?<hr/> : <></>}</li>
              <li onClick={()=>setMenu("men")}><Link style={{textDecoration : 'none'}}  to='/men'>Men</Link>{menu === "men" ?<hr/> : <></>}</li>
              <li onClick={()=>setMenu("women")}><Link style={{textDecoration : 'none'}}  to='/women'>Women</Link>{menu === "women" ?<hr/> : <></>}</li>
              <li onClick={()=>setMenu("kids")}><Link style={{textDecoration : 'none'}} to='/kids'>Kids</Link>{menu === "kids" ?<hr/> : <></>}</li>
            </ul>
            <div className="nav-login-cart">

              {localStorage.getItem('auth-token') ? <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
               : <Link to='/login'><button>Login</button></Link>}

        
              <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          
              {/* adding counter */}
              <div className="nav-cart-count">{getTotalCartItems()}</div>

            </div>
          </div>
        )
      }

      export default Navbar