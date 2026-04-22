const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Get user's cart
const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id }).populate({
      path: 'items.product',
      select: 'name price images stock isActive'
    });

    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
      await cart.save();
    }

    res.status(200).json({
      success: true,
      cart
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add item to cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;

    // Check if product exists and is active
    const product = await Product.findById(productId);
    if (!product || !product.isActive) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if product is in stock
    if (product.stock < quantity) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
    }

    // Check if item already exists in cart
    const existingItem = cart.items.find(item => 
      item.product.toString() === productId
    );

    if (existingItem) {
      // Check if adding quantity exceeds stock
      if (existingItem.quantity + quantity > product.stock) {
        return res.status(400).json({ message: 'Insufficient stock' });
      }
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity,
        price: product.price
      });
    }

    await cart.save();
    await cart.populate('items.product', 'name price images');

    res.status(200).json({
      success: true,
      cart,
      message: 'Item added to cart successfully'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update cart item quantity
const updateCartItem = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (quantity <= 0) {
      return res.status(400).json({ message: 'Quantity must be greater than 0' });
    }

    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const item = cart.items.find(item => 
      item.product.toString() === productId
    );

    if (!item) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    // Check if quantity exceeds stock
    const product = await Product.findById(productId);
    if (quantity > product.stock) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    item.quantity = quantity;
    await cart.save();
    await cart.populate('items.product', 'name price images');

    res.status(200).json({
      success: true,
      cart,
      message: 'Cart updated successfully'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;

    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => 
      item.product.toString() !== productId
    );

    await cart.save();
    await cart.populate('items.product', 'name price images');

    res.status(200).json({
      success: true,
      cart,
      message: 'Item removed from cart successfully'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Clear cart
const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = [];
    await cart.save();

    res.status(200).json({
      success: true,
      cart,
      message: 'Cart cleared successfully'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get cart summary
const getCartSummary = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.product', 'price stock');

    if (!cart) {
      return res.status(200).json({
        success: true,
        summary: {
          totalItems: 0,
          totalPrice: 0,
          items: []
        }
      });
    }

    // Check stock availability
    const unavailableItems = [];
    const availableItems = [];

    for (const item of cart.items) {
      if (item.product.stock < item.quantity) {
        unavailableItems.push({
          productId: item.product._id,
          name: item.product.name,
          requestedQuantity: item.quantity,
          availableStock: item.product.stock
        });
      } else {
        availableItems.push(item);
      }
    }

    const summary = {
      totalItems: cart.totalItems,
      totalPrice: cart.totalPrice,
      items: availableItems,
      unavailableItems
    };

    res.status(200).json({
      success: true,
      summary
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Move item to wishlist (remove from cart)
const moveToWishlist = async (req, res) => {
  try {
    const { productId } = req.params;

    // This would integrate with wishlist functionality
    // For now, just remove from cart
    await removeFromCart(req, res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  getCartSummary,
  moveToWishlist
};
