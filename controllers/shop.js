const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
}

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll();
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Index Page',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
}