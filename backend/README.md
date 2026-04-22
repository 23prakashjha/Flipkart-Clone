# Flipkart Clone Backend API

A comprehensive REST API for the Flipkart Clone e-commerce platform built with Node.js, Express, and MongoDB.

## Features

- **Authentication**: User registration, login, password reset
- **Products**: CRUD operations, search, filtering, pagination
- **Categories**: Hierarchical category management
- **Cart**: Add/remove items, quantity management
- **Orders**: Order management, status tracking
- **User Management**: Profile management, address management
- **Seller Dashboard**: Product and order management for sellers
- **Security**: JWT authentication, rate limiting, data validation

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **multer** - File uploads
- **helmet** - Security headers
- **express-rate-limit** - Rate limiting

## Installation

1. Clone the repository
2. Navigate to the backend directory
3. Install dependencies:
```bash
npm install
```

## Environment Setup

1. Copy the environment file:
```bash
cp .env.example .env
```

2. Update the `.env` file with your configuration:
- MongoDB connection string
- JWT secret key
- Email credentials (for password reset)
- Cloudinary credentials (for image uploads)
- Stripe credentials (for payments)

## Database Setup

1. Make sure MongoDB is installed and running
2. The application will automatically create the database on first run

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `POST /api/auth/address` - Add address
- `PUT /api/auth/address/:addressId` - Update address
- `DELETE /api/auth/address/:addressId` - Delete address
- `POST /api/auth/forgot-password` - Forgot password
- `POST /api/auth/reset-password` - Reset password

### Products
- `GET /api/products` - Get all products (with pagination, filtering)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/search` - Search products
- `GET /api/products/category/:categoryId` - Get products by category
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/:id/related` - Get related products
- `POST /api/products` - Create product (seller/admin)
- `PUT /api/products/:id` - Update product (seller/admin)
- `DELETE /api/products/:id` - Delete product (seller/admin)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category by ID
- `GET /api/categories/:id/subcategories` - Get subcategories
- `POST /api/categories` - Create category (admin)
- `PUT /api/categories/:id` - Update category (admin)
- `DELETE /api/categories/:id` - Delete category (admin)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item quantity
- `DELETE /api/cart/remove/:productId` - Remove item from cart
- `DELETE /api/cart/clear` - Clear cart
- `GET /api/cart/summary` - Get cart summary

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/my-orders` - Get user's orders
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id/status` - Update order status (admin/seller)
- `POST /api/orders/:id/cancel` - Cancel order
- `GET /api/orders/stats` - Get order statistics (admin)

### Users
- `GET /api/users/profile` - Get user profile with statistics

### Sellers
- `GET /api/sellers/dashboard` - Get seller dashboard statistics

## API Response Format

All API responses follow this format:

### Success Response
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error (in development mode)"
}
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Rate Limiting

The API implements rate limiting:
- 100 requests per 15-minute window per IP
- Protects against abuse and DDoS attacks

## Data Validation

All incoming data is validated using Mongoose schemas and custom validators:
- Email format validation
- Phone number validation (Indian format)
- Password strength requirements
- Required field validation

## Error Handling

Comprehensive error handling:
- Validation errors (400)
- Authentication errors (401)
- Authorization errors (403)
- Not found errors (404)
- Server errors (500)

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Rate limiting
- Security headers with helmet
- Input validation and sanitization
- CORS configuration

## Database Schema

The application uses MongoDB with the following main collections:
- `users` - User accounts and profiles
- `products` - Product information
- `categories` - Product categories
- `orders` - Order information
- `carts` - Shopping carts
- `reviews` - Product reviews

## Development

### Adding New Endpoints

1. Create controller function in `src/controllers/`
2. Add route in `src/routes/`
3. Import route in `src/server.js`
4. Add appropriate middleware (authentication, validation)

### Database Models

All models are defined in `src/models/` with:
- Schema validation
- Indexes for performance
- Virtual fields
- Instance methods
- Pre-save hooks

## Testing

Run tests with:
```bash
npm test
```

## Deployment

1. Set environment variables for production
2. Build the frontend application
3. Deploy to your preferred hosting platform
4. Configure MongoDB connection string
5. Set up reverse proxy (nginx/Apache)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
