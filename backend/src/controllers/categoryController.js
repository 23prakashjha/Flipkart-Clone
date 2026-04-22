const Category = require('../models/Category');

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true })
      .sort({ sortOrder: 1, name: 1 });

    res.status(200).json({
      success: true,
      categories
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get category by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category || !category.isActive) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json({
      success: true,
      category
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create category (admin only)
const createCategory = async (req, res) => {
  try {
    const { name, icon, description, parent, sortOrder } = req.body;

    const category = new Category({
      name,
      icon,
      description,
      parent,
      sortOrder
    });

    await category.save();

    res.status(201).json({
      success: true,
      category
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update category (admin only)
const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json({
      success: true,
      category
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete category (admin only)
const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Soft delete by setting isActive to false
    category.isActive = false;
    await category.save();

    res.status(200).json({
      success: true,
      message: 'Category deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get subcategories of a category
const getSubcategories = async (req, res) => {
  try {
    const subcategories = await Category.find({ 
      parent: req.params.id, 
      isActive: true 
    }).sort({ sortOrder: 1, name: 1 });

    res.status(200).json({
      success: true,
      subcategories
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  getSubcategories
};
