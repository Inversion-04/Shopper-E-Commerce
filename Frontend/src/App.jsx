    import { useState } from 'react'
    import reactLogo from './assets/react.svg'
    import viteLogo from '/vite.svg'
    import './App.css'
    import Navbar from './Components/Navbar/Navbar.jsx'
    import Shop from './Pages/Shop.jsx'
    import {BrowserRouter,Routes,Route} from 'react-router-dom'
    import ShopCategory from './Pages/ShopCategory.jsx'
    import Product from './Pages/Product.jsx'
    import Cart from './Pages/Cart.jsx'
    import LoginSingup from './Pages/LoginSignup.jsx'
    import Footer from './Components/Footer/Footer.jsx'
    
    import men_banner from './Components/Assets/Frontend_Assets/banner_mens.png'
    import women_banner from './Components/Assets/Frontend_Assets/banner_women.png'
    import kid_banner from './Components/Assets/Frontend_Assets/banner_kids.png'
    function App() {

      return (
        <>
        <BrowserRouter>
          <Navbar/>
          {/* definign routes */}
          <Routes>
            <Route path='/' element={<Shop/>}></Route>
            <Route path='/men' element={<ShopCategory banner = {men_banner} category="men"/>}></Route>
            <Route path='/women' element={<ShopCategory banner = {women_banner} category="women"/>}></Route>
            <Route path='/kids' element={<ShopCategory banner = {kid_banner} category="kid"/>}></Route>

            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}></Route>
            </Route>

            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<LoginSingup/>}></Route>

          </Routes>
          <Footer/>
        </BrowserRouter>
        </>
      )
    }

    export default App
