// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getProductsByPrice,
  getProductsByRating,
} = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

// @route    POST /api/products/
// @desc     Add a product
// @access   Private
router.post('/', authMiddleware, addProduct);

// @route    GET /api/products/
// @desc     Get all products
// @access   Private
router.get('/', authMiddleware, getAllProducts);

// @route    PUT /api/products/:id
// @desc     Update a product by ID
// @access   Private
router.put('/:id', authMiddleware, updateProduct);

// @route    DELETE /api/products/:id
// @desc     Delete a product by ID
// @access   Private
router.delete('/:id', authMiddleware, deleteProduct);

// @route    GET /api/products/featured
// @desc     Get featured products
// @access   Private
router.get('/featured', authMiddleware, getFeaturedProducts);

// @route   GET /api/products/price/:price
// @desc    Get products with price less than a certain value
// @access  Private
router.get('/price/:price', authMiddleware, getProductsByPrice);

// @route   GET /api/products/rating/:rating
// @desc    Get products with rating greater than a certain value
// @access  Private
router.get('/rating/:rating', authMiddleware, getProductsByRating);

module.exports = router;
