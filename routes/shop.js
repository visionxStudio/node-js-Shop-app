const path = require('path');
const express = require('express');
const router = express.Router();
const productRoutes = require('../controllers/shop');

router.get('/', productRoutes.getProducts);

router.get('/products');

router.get('/cart');

router.get('/checkout');


module.exports = router;
