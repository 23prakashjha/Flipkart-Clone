const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

// Seller specific routes
router.get('/dashboard', protect, authorize('seller'), async (req, res) => {
  try {
    const Product = require('../models/Product');
    const Order = require('../models/Order');
    
    const sellerId = req.user.id;
    
    // Get seller statistics
    const totalProducts = await Product.countDocuments({ seller: sellerId });
    const totalOrders = await Order.countDocuments();
    const totalRevenue = await Order.aggregate([
      { $match: { 'orderItems.product': { $in: await Product.find({ seller: sellerId }).distinct('_id') } } },
      { $group: { _id: null, total: { $sum: '$totalPrice' } } }
    ]);
    
    const recentOrders = await Order.find()
      .populate('orderItems.product')
      .sort({ createdAt: -1 })
      .limit(5);
    
    res.status(200).json({
      success: true,
      stats: {
        totalProducts,
        totalOrders,
        totalRevenue: totalRevenue[0]?.total || 0,
        recentOrders
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
