const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

// User specific routes
router.get('/profile', protect, async (req, res) => {
  try {
    const User = require('../models/User');
    const Order = require('../models/Order');
    
    const user = await User.findById(req.user.id).select('-password');
    
    // Get user order statistics
    const totalOrders = await Order.countDocuments({ user: req.user.id });
    const recentOrders = await Order.find({ user: req.user.id })
      .populate('orderItems.product', 'name images')
      .sort({ createdAt: -1 })
      .limit(3);
    
    res.status(200).json({
      success: true,
      user: {
        ...user.toObject(),
        totalOrders,
        recentOrders
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
