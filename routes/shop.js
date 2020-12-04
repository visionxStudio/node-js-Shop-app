const path = require('path');
const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('products/delete'); 

// /products and /products/delete are before the dynamic routes because of the order and priority

router.get('/product/:productId', shopController.getProductDetails);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

router.get('/orders', shopController.getOrders);


module.exports = router;
