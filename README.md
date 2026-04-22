# Flipkart Clone - Full Stack MERN Application

A comprehensive, full-stack Flipkart clone built with React, Node.js, Express, and MongoDB, featuring a modern responsive UI and complete e-commerce functionality.

## Features

### Frontend Features
- **Modern UI/UX**: Responsive design with smooth animations and micro-interactions
- **50+ Homepage Sections**: Diverse product categories and promotional sections
- **Product Management**: Detailed product pages with reviews, specifications, and ratings
- **Shopping Cart**: Full cart functionality with quantity management and price calculations
- **User Authentication**: Login, registration, password reset, and profile management
- **Order Management**: Complete order flow with tracking and status updates
- **Seller Dashboard**: Comprehensive seller portal for product and order management
- **Wishlist & Reviews**: Save favorite products and leave reviews
- **Search & Filtering**: Advanced product search with category, brand, and price filters

### Backend Features
- **RESTful API**: Complete REST API with proper HTTP methods and status codes
- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **Database Management**: MongoDB with Mongoose for data modeling and validation
- **File Uploads**: Image upload and management with Cloudinary integration
- **Payment Integration**: Stripe payment gateway integration
- **Email Services**: Email notifications for order confirmation and password reset
- **Rate Limiting**: API protection against abuse and DDoS attacks
- **Error Handling**: Comprehensive error handling and validation

## Technical Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Lucide React**: Modern icon library
- **Axios/Fetch**: HTTP client for API communication

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for API development
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: Object Data Modeling (ODM) for MongoDB
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **multer**: File upload handling
- **helmet**: Security headers
- **express-rate-limit**: Rate limiting

### Additional Services
- **Cloudinary**: Cloud image storage and CDN
- **Stripe**: Payment processing
- **Nodemailer**: Email services
- **MongoDB Atlas**: Cloud database hosting

## Project Structure

```
Flipkart-Mern/
  frontend/
    src/
      components/          # Reusable React components
        Header.jsx
        HeroSection.jsx
        CategorySection.jsx
        ProductCarousel.jsx
        BannerSection.jsx
        Footer.jsx
      pages/               # Page components
        Login.jsx
        ProductDetails.jsx
        Cart.jsx
        Checkout.jsx
        SellerDashboard.jsx
        Profile.jsx
        Wishlist.jsx
        Orders.jsx
        OrderSuccess.jsx
        Category.jsx
        SellerLogin.jsx
      context/             # React Context for state management
        AuthContext.jsx
        CartContext.jsx
      services/            # API service functions
        api.js
      data/               # Static data and products
        products.js
      images/             # Static images and assets (91 images)
      App.jsx
      main.jsx
      index.css
    package.json
    index.html
    vite.config.js
    tailwind.config.js
    postcss.config.js
    README.md
  backend/
    src/
      controllers/       # Route controllers
        authController.js
        productController.js
        cartController.js
        orderController.js
        categoryController.js
      models/            # Database models
        User.js
        Product.js
        Category.js
        Order.js
        Cart.js
        Review.js
      routes/            # API routes
        auth.js
        products.js
        cart.js
        orders.js
        categories.js
        users.js
        sellers.js
      middleware/        # Custom middleware
        auth.js
      utils/             # Utility functions
      config/            # Configuration files
    server.js           # Main server file
    package.json
    .env.example
    README.md
  README.md
```

### Folder Organization

#### Frontend (`/frontend`)
- **React 18** with modern hooks and functional components
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **React Router** for client-side routing
- **Context API** for state management
- **91 images** organized in `/src/images/`

#### Backend (`/backend`)
- **Node.js + Express** for REST API
- **MongoDB + Mongoose** for database
- **JWT** for authentication
- **Role-based access control** (user/seller/admin)
- **Comprehensive error handling** and validation

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

### Installation

#### Frontend Setup
1. **Navigate to Frontend Directory**
   ```bash
   cd frontend
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Start Frontend Development Server**
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5174`

#### Backend Setup
1. **Navigate to Backend Directory**
   ```bash
   cd backend
   ```

2. **Install Backend Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your configuration:
   - MongoDB connection string
   - JWT secret key
   - Email credentials (optional)
   - Cloudinary credentials (optional)
   - Stripe credentials (optional)

4. **Start Backend Server**
   ```bash
   npm run dev
   ```
   The backend API will be available at `http://localhost:5000`

#### Database Setup
1. **Install MongoDB** locally or create a free MongoDB Atlas account
2. **Update the MONGODB_URI** in your `.env` file
3. **The application will automatically create** the database on first run

### Production Deployment

#### Frontend Build
```bash
cd frontend
npm run build
```

#### Backend Production
```bash
cd backend
npm start
```

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile
- `POST /api/auth/address` - Add new address
- `PUT /api/auth/address/:id` - Update address
- `DELETE /api/auth/address/:id` - Delete address

### Product Endpoints
- `GET /api/products` - Get all products (with pagination, filtering)
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/featured` - Get featured products
- `GET /api/products/search` - Search products
- `GET /api/products/category/:id` - Get products by category
- `POST /api/products` - Create product (seller/admin)
- `PUT /api/products/:id` - Update product (seller/admin)
- `DELETE /api/products/:id` - Delete product (seller/admin)

### Cart Endpoints
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update item quantity
- `DELETE /api/cart/remove/:id` - Remove item from cart
- `DELETE /api/cart/clear` - Clear cart

### Order Endpoints
- `POST /api/orders` - Create new order
- `GET /api/orders/my-orders` - Get user's orders
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders/:id/cancel` - Cancel order
- `PUT /api/orders/:id/status` - Update order status (admin/seller)

## Key Features

### Frontend Highlights
- **50+ Homepage Sections**: Diverse product categories and promotional content
- **Advanced Search**: Real-time product search with filters
- **Product Details**: Comprehensive product pages with reviews and specifications
- **Shopping Cart**: Full cart functionality with price calculations
- **User Authentication**: Secure login/registration with JWT
- **Order Management**: Complete order tracking and status updates
- **Seller Portal**: Dedicated dashboard for sellers
- **Responsive Design**: Mobile-first responsive UI

### Backend Highlights
- **RESTful API**: Complete CRUD operations for all entities
- **JWT Authentication**: Secure token-based authentication
- **Role-Based Access**: User, seller, and admin roles
- **Data Validation**: Comprehensive input validation and sanitization
- **Error Handling**: Proper error responses and logging
- **Rate Limiting**: API protection against abuse
- **File Uploads**: Image upload and management
- **Email Services**: Automated email notifications

## Browser Support

- Chrome/Chromium (v90+)
- Firefox (v88+)
- Safari (v14+)
- Edge (v90+)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Disclaimer**: This is a demonstration project for educational purposes only. All product images, names, and content are used for demonstration purposes only. This is not affiliated with the actual Flipkart company.
