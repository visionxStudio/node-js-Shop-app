const path = require('path');
const express = require('express');
const router = express.Router();
const productRoutes = require('../controllers/products');

router.get('/', productRoutes.getProducts);

module.exports = router;
