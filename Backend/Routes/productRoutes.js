const express = require('express');
const router = express.Router();

const { addProduct, removeProduct, getAllProducts, newCollections, popularInWomen, relatedProducts } = require('../Controllers/productController');
router.post('/removeproduct', removeProduct);
router.get('/allproducts', getAllProducts);
router.get('/newCollections', newCollections);
router.get('/popularInWomen', popularInWomen);
router.get('/relatedproducts',relatedProducts);

module.exports = router;