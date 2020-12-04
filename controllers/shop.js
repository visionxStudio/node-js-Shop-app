const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/products',
    });
}

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll();
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Index Page',
      path: '/',
    });
}

exports.getCart = (req, res, next ) => {
  res.render('shop/cart', {
      pageTitle: 'Your Cart',
      path: '/cart',
  });
}

exports.getCheckout = (req, res, next ) => {
  res.render('/shop/checkout',{
    pageTitle: 'Your Cart',
    path: '/cart',
})
}