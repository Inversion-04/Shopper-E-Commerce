import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Frontend_Assets/logo_big.png'
import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png'
import facebook_icon from '../Assets/Frontend_Assets/facebook.png'
import twitter_icon from '../Assets/Frontend_Assets/twitter.png'
import pinterest_icon from '../Assets/Frontend_Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Section 1: Logo & Vision */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src={footer_logo} alt="Shopper Logo" />
            <span>SHOPPER</span>
          </div>
          <p className="brand-text">
            Elevating your style with the latest trends. Experience premium quality and worldwide shipping on every order.
          </p>
          <div className="footer-socials">
            <div className="social-icon"><img src={instagram_icon} alt="Instagram" /></div>
            <div className="social-icon"><img src={facebook_icon} alt="Facebook" /></div>
            <div className="social-icon"><img src={twitter_icon} alt="Twitter" /></div>
            <div className="social-icon"><img src={pinterest_icon} alt="Pinterest" /></div>
            <div className="social-icon"><img src={whatsapp_icon} alt="Whatsapp" /></div>
          </div>
        </div>

        {/* Section 2: Links */}
        <div className="footer-col links-col">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Our Offices</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Section 3: Links */}
        <div className="footer-col links-col">
          <h3>Shopping</h3>
          <ul>
            <li>Men's Collection</li>
            <li>Women's Fashion</li>
            <li>Kids' Wear</li>
            <li>New Arrivals</li>
          </ul>
        </div>

        {/* Section 4: Support */}
        <div className="footer-col links-col">
          <h3>Support</h3>
          <ul>
            <li>Order Tracking</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <hr />
        <p>Copyright &copy; 2026 - All Rights Reserved | SHOPPER</p>
      </div>
    </footer>
  )
}

export default Footer