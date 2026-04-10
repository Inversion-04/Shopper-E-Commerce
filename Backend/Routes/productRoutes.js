const express = require('express');
const router = express.Router();

const { addProduct, removeProduct, getAllProducts, newCollections, popularInWomen } = require('../Controllers/productController');

router.post('/addproduct', addProduct);
router.post('/removeproduct', removeProduct);
router.get('/allproducts', getAllProducts);
router.get('/newCollections', newCollections);
router.get('/popularInWomen', popularInWomen);

module.exports = router;