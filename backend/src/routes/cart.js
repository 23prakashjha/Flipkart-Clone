const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  getCartSummary,
  moveToWishlist
} = require('../controllers/cartController');

// All cart routes are protected
router.get('/', protect, getCart);
router.post('/add', protect, addToCart);
router.put('/update', protect, updateCartItem);
router.delete('/remove/:productId', protect, removeFromCart);
router.delete('/clear', protect, clearCart);
router.get('/summary', protect, getCartSummary);
router.post('/move-to-wishlist/:productId', protect, moveToWishlist);

module.exports = router;
