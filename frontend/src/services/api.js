// API service for connecting to backend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  // Add authorization header if token exists
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Auth API
export const authAPI = {
  register: (userData) => apiRequest('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  
  login: (credentials) => apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
  
  getCurrentUser: () => apiRequest('/auth/me'),
  
  updateProfile: (userData) => apiRequest('/auth/profile', {
    method: 'PUT',
    body: JSON.stringify(userData),
  }),
  
  addAddress: (addressData) => apiRequest('/auth/address', {
    method: 'POST',
    body: JSON.stringify(addressData),
  }),
  
  updateAddress: (addressId, addressData) => apiRequest(`/auth/address/${addressId}`, {
    method: 'PUT',
    body: JSON.stringify(addressData),
  }),
  
  deleteAddress: (addressId) => apiRequest(`/auth/address/${addressId}`, {
    method: 'DELETE',
  }),
  
  forgotPassword: (email) => apiRequest('/auth/forgot-password', {
    method: 'POST',
    body: JSON.stringify({ email }),
  }),
  
  resetPassword: (token, newPassword) => apiRequest('/auth/reset-password', {
    method: 'POST',
    body: JSON.stringify({ token, newPassword }),
  }),
};

// Products API
export const productsAPI = {
  getAllProducts: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/products${queryString ? `?${queryString}` : ''}`);
  },
  
  getProductById: (id) => apiRequest(`/products/${id}`),
  
  getFeaturedProducts: (limit = 10) => apiRequest(`/products/featured?limit=${limit}`),
  
  getProductsByCategory: (categoryId, params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/products/category/${categoryId}${queryString ? `?${queryString}` : ''}`);
  },
  
  getRelatedProducts: (id) => apiRequest(`/products/${id}/related`),
  
  searchProducts: (query, params = {}) => {
    const queryString = new URLSearchParams({ ...params, query }).toString();
    return apiRequest(`/products/search?${queryString}`);
  },
  
  createProduct: (productData) => apiRequest('/products', {
    method: 'POST',
    body: JSON.stringify(productData),
  }),
  
  updateProduct: (id, productData) => apiRequest(`/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(productData),
  }),
  
  deleteProduct: (id) => apiRequest(`/products/${id}`, {
    method: 'DELETE',
  }),
  
  getSellerProducts: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/products/seller/my-products${queryString ? `?${queryString}` : ''}`);
  },
};

// Categories API
export const categoriesAPI = {
  getAllCategories: () => apiRequest('/categories'),
  
  getCategoryById: (id) => apiRequest(`/categories/${id}`),
  
  getSubcategories: (id) => apiRequest(`/categories/${id}/subcategories`),
  
  createCategory: (categoryData) => apiRequest('/categories', {
    method: 'POST',
    body: JSON.stringify(categoryData),
  }),
  
  updateCategory: (id, categoryData) => apiRequest(`/categories/${id}`, {
    method: 'PUT',
    body: JSON.stringify(categoryData),
  }),
  
  deleteCategory: (id) => apiRequest(`/categories/${id}`, {
    method: 'DELETE',
  }),
};

// Cart API
export const cartAPI = {
  getCart: () => apiRequest('/cart'),
  
  addToCart: (productId, quantity = 1) => apiRequest('/cart/add', {
    method: 'POST',
    body: JSON.stringify({ productId, quantity }),
  }),
  
  updateCartItem: (productId, quantity) => apiRequest('/cart/update', {
    method: 'PUT',
    body: JSON.stringify({ productId, quantity }),
  }),
  
  removeFromCart: (productId) => apiRequest(`/cart/remove/${productId}`, {
    method: 'DELETE',
  }),
  
  clearCart: () => apiRequest('/cart/clear', {
    method: 'DELETE',
  }),
  
  getCartSummary: () => apiRequest('/cart/summary'),
  
  moveToWishlist: (productId) => apiRequest(`/cart/move-to-wishlist/${productId}`, {
    method: 'POST',
  }),
};

// Orders API
export const ordersAPI = {
  createOrder: (orderData) => apiRequest('/orders', {
    method: 'POST',
    body: JSON.stringify(orderData),
  }),
  
  getUserOrders: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/orders/my-orders${queryString ? `?${queryString}` : ''}`);
  },
  
  getOrderById: (id) => apiRequest(`/orders/${id}`),
  
  updateOrderStatus: (id, status) => apiRequest(`/orders/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status }),
  }),
  
  cancelOrder: (id) => apiRequest(`/orders/${id}/cancel`, {
    method: 'POST',
  }),
  
  getOrderStats: () => apiRequest('/orders/stats'),
};

// Users API
export const usersAPI = {
  getProfile: () => apiRequest('/users/profile'),
};

// Sellers API
export const sellersAPI = {
  getDashboard: () => apiRequest('/sellers/dashboard'),
};

// Health check
export const healthCheck = () => apiRequest('/health');

export default {
  authAPI,
  productsAPI,
  categoriesAPI,
  cartAPI,
  ordersAPI,
  usersAPI,
  sellersAPI,
  healthCheck,
};
