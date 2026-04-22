const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
  cancelOrder,
  getOrderStats
} = require('../controllers/orderController');

// Protected routes
router.post('/', protect, createOrder);
router.get('/my-orders', protect, getUserOrders);
router.get('/stats', protect, authorize('admin'), getOrderStats);
router.get('/:id', protect, getOrderById);
router.put('/:id/status', protect, authorize('admin', 'seller'), updateOrderStatus);
router.post('/:id/cancel', protect, cancelOrder);

module.exports = router;
