const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    unique: true,
    trim: true,
    maxlength: [50, 'Category name cannot exceed 50 characters']
  },
  icon: {
    type: String,
    required: [true, 'Category icon is required']
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  },
  sortOrder: {
    type: Number,
    default: 0
  },
  meta: {
    title: String,
    description: String,
    keywords: [String]
  }
}, {
  timestamps: true
});

// Create index for better performance
categorySchema.index({ name: 1 });
categorySchema.index({ parent: 1, sortOrder: 1 });

// Method to get subcategories
categorySchema.methods.getSubcategories = function() {
  return mongoose.model('Category').find({ parent: this._id, isActive: true }).sort({ sortOrder: 1 });
};

// Method to get all products in this category and subcategories
categorySchema.methods.getAllProducts = async function() {
  const Product = mongoose.model('Product');
  const subcategories = await this.getSubcategories();
  const categoryIds = [this._id, ...subcategories.map(cat => cat._id)];
  
  return Product.find({ 
    category: { $in: categoryIds }, 
    isActive: true 
  }).populate('category').populate('seller');
};

module.exports = mongoose.model('Category', categorySchema);
