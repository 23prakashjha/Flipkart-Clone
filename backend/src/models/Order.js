const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity must be at least 1']
  },
  image: String
});

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderItems: [orderItemSchema],
  shippingAddress: {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    addressLine: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    pincode: {
      type: String,
      required: true
    },
    landmark: String
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['cod', 'card', 'upi', 'netbanking', 'wallet']
  },
  paymentInfo: {
    id: String,
    status: String,
    paidAt: Date,
    amount: Number
  },
  itemsPrice: {
    type: Number,
    required: true,
    min: [0, 'Items price cannot be negative']
  },
  taxPrice: {
    type: Number,
    required: true,
    min: [0, 'Tax price cannot be negative'],
    default: 0
  },
  shippingPrice: {
    type: Number,
    required: true,
    min: [0, 'Shipping price cannot be negative'],
    default: 0
  },
  totalPrice: {
    type: Number,
    required: true,
    min: [0, 'Total price cannot be negative']
  },
  orderStatus: {
    type: String,
    required: true,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  deliveredAt: Date,
  estimatedDelivery: Date,
  trackingNumber: String,
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create indexes for better performance
orderSchema.index({ user: 1, createdAt: -1 });
orderSchema.index({ orderStatus: 1 });
orderSchema.index({ seller: 1 });

// Method to calculate total price
orderSchema.methods.calculateTotalPrice = function() {
  this.itemsPrice = this.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  this.totalPrice = this.itemsPrice + this.taxPrice + this.shippingPrice;
  return this.totalPrice;
};

// Method to update order status
orderSchema.methods.updateStatus = function(status) {
  this.orderStatus = status;
  if (status === 'delivered') {
    this.deliveredAt = new Date();
  }
  return this.save();
};

// Method to check if order can be cancelled
orderSchema.methods.canBeCancelled = function() {
  return ['pending', 'processing'].includes(this.orderStatus);
};

module.exports = mongoose.model('Order', orderSchema);
