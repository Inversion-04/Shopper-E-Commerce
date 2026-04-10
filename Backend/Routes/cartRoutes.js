const express = require('express');
const router =  express.Router();
const { fetchUser ,isAdmin } = require('../Middlewares/fetchUser');

const{addToCart, removeFromCart, getCart} = require('../Controllers/cartController');

router.post('/addtocart', fetchUser,addToCart);
router.post('/removefromcart', fetchUser,removeFromCart);
router.post('/getcart', fetchUser, getCart);

module.exports = router;