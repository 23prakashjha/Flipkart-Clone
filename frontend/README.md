# Flipkart Clone - Frontend

The frontend application for the Flipkart Clone built with React, Vite, and Tailwind CSS.

## Features

- **Modern UI/UX**: Responsive design with smooth animations and micro-interactions
- **50+ Homepage Sections**: Diverse product categories and promotional sections
- **Product Management**: Detailed product pages with reviews, specifications, and ratings
- **Shopping Cart**: Full cart functionality with quantity management and price calculations
- **User Authentication**: Login, registration, password reset, and profile management
- **Order Management**: Complete order flow with tracking and status updates
- **Seller Dashboard**: Comprehensive seller portal for product and order management
- **Wishlist & Reviews**: Save favorite products and leave reviews
- **Search & Filtering**: Advanced product search with category, brand, and price filters

## Technical Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Lucide React**: Modern icon library
- **Axios/Fetch**: HTTP client for API communication

## Project Structure

```
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
    images/             # Static images and assets
    App.jsx
    main.jsx
    index.css
  package.json
  index.html
  vite.config.js
  tailwind.config.js
  postcss.config.js
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5174`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The frontend connects to the backend API through the `src/services/api.js` file. Make sure the backend server is running and update the `VITE_API_URL` environment variable accordingly.

## Components Overview

### Header
- Navigation with search functionality
- User authentication dropdown
- Cart and seller links
- Mobile responsive menu

### Product Components
- **ProductCarousel**: Horizontal scrolling product lists
- **ProductDetails**: Individual product pages with reviews
- **CategorySection**: Category grid with hover effects

### Page Components
- **Login/SellerLogin**: Authentication pages
- **Cart**: Shopping cart management
- **Checkout**: Order placement
- **Orders**: Order history and tracking
- **SellerDashboard**: Seller management portal

## State Management

The application uses React Context for state management:
- **AuthContext**: User authentication and profile data
- **CartContext**: Shopping cart state and operations

## Styling

The application uses Tailwind CSS for styling:
- Responsive design with mobile-first approach
- Custom animations and transitions
- Component-based styling approach

## Browser Support

- Chrome/Chromium (v90+)
- Firefox (v88+)
- Safari (v14+)
- Edge (v90+)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
