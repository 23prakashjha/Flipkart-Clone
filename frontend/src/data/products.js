// Comprehensive product data for Flipkart clone

export const categories = [
  { id: 'mobiles', name: 'Mobiles & Tablets', icon: 'mobiles.webp' },
  { id: 'electronics', name: 'Electronics', icon: 'Electronic.webp' },
  { id: 'tv-appliances', name: 'TV\'s & Appliances', icon: 'Tv and applinces.webp' },
  { id: 'fashion', name: 'Fashion', icon: 'fashion.webp' },
  { id: 'home-kitchen', name: 'Home & Kitchen', icon: 'Home and kitchen.webp' },
  { id: 'beauty-toys', name: 'Beauty & Toys', icon: 'Beauty and toys.webp' },
  { id: 'furniture', name: 'Furniture', icon: 'furniture.webp' },
  { id: 'flights', name: 'Books Flights', icon: 'book flight.webp' },
  { id: 'grocery', name: 'Grocery', icon: 'grocery.webp' }
]

export const products = {
  mobiles: [
    { id: 1, name: 'Motorola Edge 40 5G', price: 24999, originalPrice: 29999, discount: 17, rating: 4.3, reviews: 12456, image: 'moto', brand: 'Motorola', category: 'mobiles', inStock: true, description: '6.55" pOLED Display, MediaTek Dimensity 8020, 68W Fast Charging' },
    { id: 2, name: 'Vivo V29 5G', price: 32999, originalPrice: 38999, discount: 15, rating: 4.5, reviews: 8923, image: 'vivo', brand: 'Vivo', category: 'mobiles', inStock: true, description: '6.78" AMOLED Display, Snapdragon 778G, 80W Fast Charging' },
    { id: 3, name: 'Samsung Galaxy S23', price: 54999, originalPrice: 64999, discount: 15, rating: 4.6, reviews: 15678, image: 'one1', brand: 'Samsung', category: 'mobiles', inStock: true, description: '6.1" Dynamic AMOLED, Snapdragon 8 Gen 2, 25W Fast Charging' },
    { id: 4, name: 'OnePlus 11 5G', price: 45999, originalPrice: 56999, discount: 19, rating: 4.4, reviews: 9876, image: 'oneplus', brand: 'OnePlus', category: 'mobiles', inStock: true, description: '6.7" Fluid AMOLED, Snapdragon 8 Gen 2, 100W SuperVOOC' },
    { id: 5, name: 'iPhone 15 Pro', price: 119999, originalPrice: 134999, discount: 11, rating: 4.7, reviews: 23456, image: 'iphone', brand: 'Apple', category: 'mobiles', inStock: true, description: '6.1" Super Retina XDR, A17 Pro, 27W Fast Charging' },
    { id: 6, name: 'Poco X6 Pro', price: 21999, originalPrice: 25999, discount: 15, rating: 4.2, reviews: 6543, image: 'poco', brand: 'Poco', category: 'mobiles', inStock: true, description: '6.67" AMOLED, MediaTek Dimensity 8300 Ultra, 67W Fast Charging' },
    { id: 7, name: 'Realme GT 3', price: 28999, originalPrice: 34999, discount: 17, rating: 4.3, reviews: 7890, image: 'realme', brand: 'Realme', category: 'mobiles', inStock: true, description: '6.74" AMOLED, Snapdragon 8+ Gen 1, 150W Ultra Fast Charging' },
    { id: 8, name: 'Google Pixel 8', price: 52999, originalPrice: 62999, discount: 16, rating: 4.5, reviews: 11234, image: 'google', brand: 'Google', category: 'mobiles', inStock: true, description: '6.2" OLED, Google Tensor G3, 30W Fast Charging' },
    { id: 9, name: 'Nothing Phone 2', price: 44999, originalPrice: 54999, discount: 18, rating: 4.1, reviews: 4567, image: 'Nothing', brand: 'Nothing', category: 'mobiles', inStock: true, description: '6.7" LTPO OLED, Snapdragon 8+ Gen 1, 45W Fast Charging' },
    { id: 10, name: 'Infinix GT 10 Pro', price: 18999, originalPrice: 22999, discount: 17, rating: 4.0, reviews: 3456, image: 'infinix', brand: 'Infinix', category: 'mobiles', inStock: true, description: '6.8" AMOLED, MediaTek Dimensity 8200, 45W Fast Charging' },
    { id: 11, name: 'iQOO 12', price: 42999, originalPrice: 49999, discount: 14, rating: 4.4, reviews: 8901, image: 'iqoo', brand: 'iQOO', category: 'mobiles', inStock: true, description: '6.78" AMOLED, Snapdragon 8 Gen 3, 120W Fast Charging' },
    { id: 12, name: 'Oppo Find N3', price: 94999, originalPrice: 109999, discount: 14, rating: 4.6, reviews: 5678, image: 'oppo', brand: 'Oppo', category: 'mobiles', inStock: true, description: '7.82" Foldable Display, Snapdragon 8 Gen 2, 67W Fast Charging' }
  ],
  
  electronics: [
    { id: 13, name: 'Sony WH-1000XM5 Headphones', price: 24990, originalPrice: 29990, discount: 17, rating: 4.6, reviews: 8901, image: 'one2', brand: 'Sony', category: 'electronics', inStock: true, description: 'Industry Leading Noise Cancellation, 30 Hour Battery Life' },
    { id: 14, name: 'Apple AirPods Pro 2', price: 19999, originalPrice: 24999, discount: 20, rating: 4.7, reviews: 15234, image: 'one3', brand: 'Apple', category: 'electronics', inStock: true, description: 'Active Noise Cancellation, 6 Hour Battery Life' },
    { id: 15, name: 'Samsung Galaxy Watch 6', price: 18999, originalPrice: 24999, discount: 24, rating: 4.5, reviews: 8923, image: 'one4', brand: 'Samsung', category: 'electronics', inStock: true, description: '1.3" Super AMOLED, Exynos W920, Sleep Tracking' },
    { id: 16, name: 'Canon EOS R50 Camera', price: 54999, originalPrice: 64999, discount: 15, rating: 4.4, reviews: 3456, image: 'one5', brand: 'Canon', category: 'electronics', inStock: true, description: '24.2MP APS-C, 4K Video, Compact Design' },
    { id: 17, name: 'Dell XPS 13 Laptop', price: 89999, originalPrice: 109999, discount: 18, rating: 4.5, reviews: 6789, image: 'one6', brand: 'Dell', category: 'electronics', inStock: true, description: '13.4" FHD+, Intel Core i7, 16GB RAM, 512GB SSD' },
    { id: 18, name: 'iPad Air 5', price: 44999, originalPrice: 54999, discount: 18, rating: 4.6, reviews: 9876, image: 'one7', brand: 'Apple', category: 'electronics', inStock: true, description: '10.9" Liquid Retina, M1 Chip, 64GB Storage' },
    { id: 19, name: 'Kindle Paperwhite', price: 12999, originalPrice: 16999, discount: 24, rating: 4.3, reviews: 5678, image: 'one8', brand: 'Amazon', category: 'electronics', inStock: true, description: '6.8" Display, Waterproof, 8GB Storage' },
    { id: 20, name: 'GoPro Hero 12', price: 34999, originalPrice: 42999, discount: 19, rating: 4.4, reviews: 2345, image: 'price1', brand: 'GoPro', category: 'electronics', inStock: true, description: '5.3K Video, HyperSmooth 6.0, Waterproof to 10m' },
    { id: 21, name: 'Dyson V15 Vacuum', price: 54990, originalPrice: 64990, discount: 15, rating: 4.5, reviews: 4567, image: 'price2', brand: 'Dyson', category: 'electronics', inStock: true, description: '60 Minute Runtime, Laser Dust Detection, HEPA Filter' },
    { id: 22, name: 'Nintendo Switch OLED', price: 29999, originalPrice: 34999, discount: 14, rating: 4.6, reviews: 7890, image: 'price3', brand: 'Nintendo', category: 'electronics', inStock: true, description: '7" OLED Screen, 64GB Storage, Enhanced Audio' }
  ],
  
  tvAppliances: [
    { id: 23, name: 'Samsung 65" QLED 4K TV', price: 64999, originalPrice: 84999, discount: 24, rating: 4.5, reviews: 12345, image: 'price4', brand: 'Samsung', category: 'tv-appliances', inStock: true, description: '65" QLED, 4K UHD, Smart TV, Alexa Built-in' },
    { id: 24, name: 'LG 55" OLED 4K TV', price: 74999, originalPrice: 94999, discount: 21, rating: 4.6, reviews: 9876, image: 'price5', brand: 'LG', category: 'tv-appliances', inStock: true, description: '55" OLED, 4K UHD, WebOS, Dolby Vision' },
    { id: 25, name: 'Sony 75" LED 4K TV', price: 89999, originalPrice: 119999, discount: 25, rating: 4.4, reviews: 6789, image: 'price6', brand: 'Sony', category: 'tv-appliances', inStock: true, description: '75" LED, 4K UHD, Android TV, Google Assistant' },
    { id: 26, name: 'Mi 43" 4K Smart TV', price: 24999, originalPrice: 32999, discount: 24, rating: 4.2, reviews: 8901, image: 'price7', brand: 'Mi', category: 'tv-appliances', inStock: true, description: '43" LED, 4K UHD, PatchWall, 20W Speakers' },
    { id: 27, name: 'Whirlpool 7kg Washing Machine', price: 18999, originalPrice: 24999, discount: 24, rating: 4.3, reviews: 4567, image: 'price8', brand: 'Whirlpool', category: 'tv-appliances', inStock: true, description: '7kg Capacity, Fully Automatic, 6 Wash Programs' },
    { id: 28, name: 'LG 654L Double Door Refrigerator', price: 34999, originalPrice: 44999, discount: 22, rating: 4.4, reviews: 5678, image: 'price9', brand: 'LG', category: 'tv-appliances', inStock: true, description: '654L Capacity, Double Door, Smart Inverter' },
    { id: 29, name: 'Samsung 28L Microwave Oven', price: 8999, originalPrice: 11999, discount: 25, rating: 4.2, reviews: 3456, image: 'price10', brand: 'Samsung', category: 'tv-appliances', inStock: true, description: '28L Capacity, Convection, Ceramic Enamel' },
    { id: 30, name: 'Hitachi 1.5 Ton AC', price: 32999, originalPrice: 42999, discount: 23, rating: 4.3, reviews: 6789, image: 'price11', brand: 'Hitachi', category: 'tv-appliances', inStock: true, description: '1.5 Ton, 5 Star Rating, Copper Condenser' },
    { id: 31, name: 'Philips Air Fryer 800W', price: 3999, originalPrice: 5999, discount: 33, rating: 4.1, reviews: 2345, image: 'price12', brand: 'Philips', category: 'tv-appliances', inStock: true, description: '800W Power, 2.2L Capacity, Rapid Air Technology' },
    { id: 32, name: 'Bajaj 20L Grill Microwave', price: 6999, originalPrice: 9999, discount: 30, rating: 4.0, reviews: 3456, image: 'price13', brand: 'Bajaj', category: 'tv-appliances', inStock: true, description: '20L Capacity, Grill, 10 Power Levels' },
    { id: 33, name: 'Godrej 185L Single Door Refrigerator', price: 12999, originalPrice: 16999, discount: 24, rating: 4.1, reviews: 4567, image: 'price14', brand: 'Godrej', category: 'tv-appliances', inStock: true, description: '185L Capacity, Single Door, 5 Star Rating' },
    { id: 34, name: 'IFB 6kg Front Load Washing Machine', price: 22999, originalPrice: 28999, discount: 21, rating: 4.3, reviews: 5678, image: 'price15', brand: 'IFB', category: 'tv-appliances', inStock: true, description: '6kg Capacity, Front Load, 8 Wash Programs' }
  ],
  
  fashion: [
    { id: 35, name: 'Nike Air Max 270', price: 8999, originalPrice: 12999, discount: 31, rating: 4.4, reviews: 6789, image: 'price16', brand: 'Nike', category: 'fashion', inStock: true, description: 'Air Max 270, Breathable Mesh, Rubber Outsole' },
    { id: 36, name: 'Adidas Ultraboost 22', price: 14999, originalPrice: 19999, discount: 25, rating: 4.5, reviews: 8901, image: 'price17', brand: 'Adidas', category: 'fashion', inStock: true, description: 'Ultraboost 22, Primeknit Upper, Continental Rubber' },
    { id: 37, name: 'Levi\'s 501 Jeans', price: 3999, originalPrice: 5999, discount: 33, rating: 4.3, reviews: 12345, image: 'Minutes', brand: 'Levi\'s', category: 'fashion', inStock: true, description: '501 Original Fit, 100% Cotton, Straight Leg' },
    { id: 38, name: 'Puma T-Shirt', price: 999, originalPrice: 1499, discount: 33, rating: 4.2, reviews: 3456, image: 'moto', brand: 'Puma', category: 'fashion', inStock: true, description: 'Cotton Blend, Regular Fit, Crew Neck' },
    { id: 39, name: 'Ray-Ban Aviator Sunglasses', price: 8999, originalPrice: 12999, discount: 31, rating: 4.6, reviews: 4567, image: 'vivo', brand: 'Ray-Ban', category: 'fashion', inStock: true, description: 'Aviator Style, G-15 Lens, Metal Frame' },
    { id: 40, name: 'Fossil Gen 6 Smartwatch', price: 17999, originalPrice: 24999, discount: 28, rating: 4.3, reviews: 2345, image: 'one1', brand: 'Fossil', category: 'fashion', inStock: true, description: 'Gen 6, Wear OS, Heart Rate Monitor' },
    { id: 41, name: 'Woodland Leather Wallet', price: 1999, originalPrice: 2999, discount: 33, rating: 4.1, reviews: 1234, image: 'one2', brand: 'Woodland', category: 'fashion', inStock: true, description: 'Genuine Leather, Multiple Card Slots, RFID Protection' },
    { id: 42, name: 'USPA Polo Shirt', price: 1499, originalPrice: 2299, discount: 35, rating: 4.2, reviews: 3456, image: 'one3', brand: 'USPA', category: 'fashion', inStock: true, description: 'Cotton Pique, Polo Collar, Regular Fit' },
    { id: 43, name: 'Titan Analog Watch', price: 3999, originalPrice: 5999, discount: 33, rating: 4.3, reviews: 5678, image: 'one4', brand: 'Titan', category: 'fashion', inStock: true, description: 'Analog Display, Leather Strap, Water Resistant' },
    { id: 44, name: 'Van Heusen Formal Shirt', price: 1999, originalPrice: 2999, discount: 33, rating: 4.1, reviews: 2345, image: 'one5', brand: 'Van Heusen', category: 'fashion', inStock: true, description: 'Cotton, Formal, Long Sleeves' }
  ],
  
  homeKitchen: [
    { id: 45, name: 'Prestige Pressure Cooker 5L', price: 1999, originalPrice: 2999, discount: 33, rating: 4.3, reviews: 8901, image: 'one6', brand: 'Prestige', category: 'home-kitchen', inStock: true, description: '5L Capacity, Aluminum Body, Safety Valve' },
    { id: 46, name: 'Milton Water Bottle 1L', price: 299, originalPrice: 499, discount: 40, rating: 4.2, reviews: 12345, image: 'one7', brand: 'Milton', category: 'home-kitchen', inStock: true, description: '1L Capacity, Stainless Steel, Leak Proof' },
    { id: 47, name: 'Cello Dinner Set 36 Pieces', price: 2999, originalPrice: 4499, discount: 33, rating: 4.1, reviews: 3456, image: 'one8', brand: 'Cello', category: 'home-kitchen', inStock: true, description: '36 Pieces, Ceramic, Microwave Safe' },
    { id: 48, name: 'Pigeon Induction Cooktop', price: 1999, originalPrice: 2999, discount: 33, rating: 4.0, reviews: 5678, image: 'price1', brand: 'Pigeon', category: 'home-kitchen', inStock: true, description: '1600W Power, 7 Power Levels, Auto Shut Off' },
    { id: 49, name: 'Bajaj Mixer Grinder 750W', price: 2499, originalPrice: 3499, discount: 29, rating: 4.2, reviews: 6789, image: 'price2', brand: 'Bajaj', category: 'home-kitchen', inStock: true, description: '750W Motor, 3 Jars, Stainless Steel Blades' },
    { id: 50, name: 'Wonderchef Gas Stove 4 Burner', price: 4999, originalPrice: 6999, discount: 29, rating: 4.3, reviews: 3456, image: 'price3', brand: 'Wonderchef', category: 'home-kitchen', inStock: true, description: '4 Burners, Toughened Glass, Auto Ignition' },
    { id: 51, name: 'Laopat Non-Stick Tawa', price: 699, originalPrice: 999, discount: 30, rating: 4.1, reviews: 2345, image: 'price4', brand: 'Laopat', category: 'home-kitchen', inStock: true, description: '28cm Diameter, 5mm Thickness, PFOA Free' },
    { id: 52, name: 'KENT Vegetable Purifier', price: 5999, originalPrice: 7999, discount: 25, rating: 4.2, reviews: 1234, image: 'price5', brand: 'KENT', category: 'home-kitchen', inStock: true, description: '15L Capacity, Ozone Technology, Wall Mountable' },
    { id: 53, name: 'Crompton Ceiling Fan 1200mm', price: 2499, originalPrice: 3499, discount: 29, rating: 4.1, reviews: 5678, image: 'price6', brand: 'Crompton', category: 'home-kitchen', inStock: true, description: '1200mm Sweep, 380 RPM, Double Ball Bearing' },
    { id: 54, name: 'Havells Geyser 15L', price: 7999, originalPrice: 10999, discount: 27, rating: 4.3, reviews: 3456, image: 'price7', brand: 'Havells', category: 'home-kitchen', inStock: true, description: '15L Capacity, 2000W, Glass Lined Tank' }
  ],
  
  beautyToys: [
    { id: 55, name: 'Lakme Face Wash 100ml', price: 199, originalPrice: 299, discount: 33, rating: 4.2, reviews: 12345, image: 'price8', brand: 'Lakme', category: 'beauty-toys', inStock: true, description: '100ml, Vitamin C, Deep Cleansing' },
    { id: 56, name: 'Maybelline Lipstick', price: 399, originalPrice: 599, discount: 33, rating: 4.3, reviews: 6789, image: 'price9', brand: 'Maybelline', category: 'beauty-toys', inStock: true, description: 'Creamy Matte, Long Lasting, 4.2g' },
    { id: 57, name: 'Nivea Face Cream 50ml', price: 299, originalPrice: 449, discount: 33, rating: 4.1, reviews: 8901, image: 'price10', brand: 'Nivea', category: 'beauty-toys', inStock: true, description: '50ml, Vitamin E, Daily Use' },
    { id: 58, name: 'Park Avenue Deodorant 150ml', price: 299, originalPrice: 449, discount: 33, rating: 4.0, reviews: 3456, image: 'price11', brand: 'Park Avenue', category: 'beauty-toys', inStock: true, description: '150ml, Long Lasting, Fresh Fragrance' },
    { id: 59, name: 'LEGO City Police Set', price: 2999, originalPrice: 4499, discount: 33, rating: 4.5, reviews: 2345, image: 'price12', brand: 'LEGO', category: 'beauty-toys', inStock: true, description: '300+ Pieces, Police Theme, Age 6+' },
    { id: 60, name: 'Funskool Rubik\'s Cube', price: 299, originalPrice: 449, discount: 33, rating: 4.2, reviews: 5678, image: 'price13', brand: 'Funskool', category: 'beauty-toys', inStock: true, description: '3x3x3, Smooth Movement, Brain Teaser' },
    { id: 61, name: 'Hot Wheels Car Set', price: 999, originalPrice: 1499, discount: 33, rating: 4.3, reviews: 3456, image: 'price14', brand: 'Hot Wheels', category: 'beauty-toys', inStock: true, description: '5 Cars, Metal Body, Age 3+' },
    { id: 62, name: 'Barbie Doll Set', price: 1499, originalPrice: 2249, discount: 33, rating: 4.4, reviews: 2345, image: 'price15', brand: 'Barbie', category: 'beauty-toys', inStock: true, description: 'Fashion Doll, Accessories, Age 3+' },
    { id: 63, name: 'Olay Regenerist Cream 50g', price: 899, originalPrice: 1299, discount: 31, rating: 4.3, reviews: 6789, image: 'price16', brand: 'Olay', category: 'beauty-toys', inStock: true, description: '50g, Anti-Aging, Fragrance Free' },
    { id: 64, name: 'Gillette Mach3 Razor', price: 499, originalPrice: 749, discount: 33, rating: 4.2, reviews: 8901, image: 'price17', brand: 'Gillette', category: 'beauty-toys', inStock: true, description: '3 Blades, Lubrastrip, 1 Cartridge' }
  ],
  
  furniture: [
    { id: 65, name: 'Urban Ladder Sofa 3 Seater', price: 24999, originalPrice: 34999, discount: 29, rating: 4.3, reviews: 3456, image: 'Minutes', brand: 'Urban Ladder', category: 'furniture', inStock: true, description: '3 Seater, Fabric Upholstery, Wooden Frame' },
    { id: 66, name: 'Pepperfry Dining Table 6 Seater', price: 19999, originalPrice: 29999, discount: 33, rating: 4.2, reviews: 2345, image: 'moto', brand: 'Pepperfry', category: 'furniture', inStock: true, description: '6 Seater, Sheesham Wood, Matte Finish' },
    { id: 67, name: 'Godrej Interio Wardrobe 3 Door', price: 14999, originalPrice: 22499, discount: 33, rating: 4.1, reviews: 5678, image: 'vivo', brand: 'Godrej', category: 'furniture', inStock: true, description: '3 Door, Engineered Wood, 250L Capacity' },
    { id: 68, name: 'Wakefit Queen Size Bed', price: 12999, originalPrice: 18999, discount: 32, rating: 4.3, reviews: 6789, image: 'one1', brand: 'Wakefit', category: 'furniture', inStock: true, description: 'Queen Size, Hydraulic Storage, Headboard' },
    { id: 69, name: 'Green Soul Office Chair', price: 4999, originalPrice: 7499, discount: 33, rating: 4.2, reviews: 3456, image: 'one2', brand: 'Green Soul', category: 'furniture', inStock: true, description: 'Ergonomic Design, Mesh Back, Lumbar Support' },
    { id: 70, name: 'Durian Coffee Table', price: 6999, originalPrice: 9999, discount: 30, rating: 4.1, reviews: 2345, image: 'one3', brand: 'Durian', category: 'furniture', inStock: true, description: 'Coffee Table, Glass Top, Metal Legs' },
    { id: 71, name: 'Nilkamal Study Table', price: 3999, originalPrice: 5999, discount: 33, rating: 4.0, reviews: 1234, image: 'one4', brand: 'Nilkamal', category: 'furniture', inStock: true, description: 'Study Table, Engineered Wood, Drawer Storage' },
    { id: 72, name: 'Royal Oak Bookshelf 5 Shelf', price: 8999, originalPrice: 13499, discount: 33, rating: 4.2, reviews: 3456, image: 'one5', brand: 'Royal Oak', category: 'furniture', inStock: true, description: '5 Shelf, Particle Board, 100kg Capacity' }
  ],
  
  flights: [
    { id: 73, name: 'Domestic Flight Booking - Delhi to Mumbai', price: 3999, originalPrice: 5999, discount: 33, rating: 4.2, reviews: 12345, image: 'one6', brand: 'Airlines', category: 'flights', inStock: true, description: 'Economy Class, 2h 30m, Direct Flight' },
    { id: 74, name: 'International Flight - Mumbai to Dubai', price: 15999, originalPrice: 24999, discount: 36, rating: 4.3, reviews: 6789, image: 'one7', brand: 'Airlines', category: 'flights', inStock: true, description: 'Economy Class, 3h 15m, Direct Flight' },
    { id: 75, name: 'Train Booking - Delhi to Agra', price: 599, originalPrice: 899, discount: 33, rating: 3.8, reviews: 23456, image: 'one8', brand: 'Railways', category: 'flights', inStock: true, description: 'AC Chair Car, 2h 30m, Express Train' },
    { id: 76, name: 'Bus Booking - Bangalore to Chennai', price: 899, originalPrice: 1299, discount: 31, rating: 3.9, reviews: 8901, image: 'price1', brand: 'Bus', category: 'flights', inStock: true, description: 'Volvo AC, 8h, Multi-Axle' },
    { id: 77, name: 'Hotel Booking - Goa 3N 4D', price: 12999, originalPrice: 19999, discount: 35, rating: 4.1, reviews: 3456, image: 'price2', brand: 'Hotels', category: 'flights', inStock: true, description: '3N 4D Package, 3 Star Hotel, Breakfast Included' }
  ],
  
  grocery: [
    { id: 78, name: 'Amul Taaza Milk 1L', price: 59, originalPrice: 69, discount: 14, rating: 4.4, reviews: 45678, image: 'price3', brand: 'Amul', category: 'grocery', inStock: true, description: '1L Pack, Pasteurized, 3% Fat' },
    { id: 79, name: 'Aashirvaad Atta 5kg', price: 299, originalPrice: 349, discount: 14, rating: 4.3, reviews: 34567, image: 'price4', brand: 'Aashirvaad', category: 'grocery', inStock: true, description: '5kg Pack, Whole Wheat, Chakki Fresh' },
    { id: 80, name: 'Fortune Rice 5kg', price: 399, originalPrice: 499, discount: 20, rating: 4.2, reviews: 23456, image: 'price5', brand: 'Fortune', category: 'grocery', inStock: true, description: '5kg Pack, Basmati, Aged 2 Years' },
    { id: 81, name: 'Tata Salt 1kg', price: 29, originalPrice: 39, discount: 26, rating: 4.5, reviews: 56789, image: 'price6', brand: 'Tata', category: 'grocery', inStock: true, description: '1kg Pack, Iodized, Free Flow' },
    { id: 82, name: 'Saffola Gold Oil 1L', price: 189, originalPrice: 229, discount: 17, rating: 4.3, reviews: 23456, image: 'price7', brand: 'Saffola', category: 'grocery', inStock: true, description: '1L Bottle, Refined, Losorb Technology' },
    { id: 83, name: 'Coca Cola 2.25L', price: 89, originalPrice: 99, discount: 10, rating: 4.6, reviews: 67890, image: 'price8', brand: 'Coca Cola', category: 'grocery', inStock: true, description: '2.25L Bottle, Carbonated, Original Taste' },
    { id: 84, name: 'Brita Water Filter 2.2L', price: 2999, originalPrice: 3999, discount: 25, rating: 4.4, reviews: 12345, image: 'price9', brand: 'Brita', category: 'grocery', inStock: true, description: '2.2L Capacity, Filter Cartridge, BPA Free' },
    { id: 85, name: 'Maggi Noodles 570g', price: 89, originalPrice: 99, discount: 10, rating: 4.2, reviews: 89012, image: 'price10', brand: 'Maggi', category: 'grocery', inStock: true, description: '570g Pack, Instant Noodles, Masala Flavor' }
  ]
}

// Get all products as a flat array
export const getAllProducts = () => {
  return Object.values(products).flat()
}

// Get products by category
export const getProductsByCategory = (categoryId) => {
  return products[categoryId] || []
}

// Get product by ID
export const getProductById = (productId) => {
  return getAllProducts().find(product => product.id === productId)
}

// Get featured products
export const getFeaturedProducts = () => {
  return getAllProducts().filter(product => product.rating >= 4.5).slice(0, 20)
}

// Get deal products
export const getDealProducts = () => {
  return getAllProducts().filter(product => product.discount >= 25).slice(0, 20)
}

// Get new arrivals
export const getNewArrivals = () => {
  return getAllProducts().slice(0, 20)
}

// Homepage sections data
export const homepageSections = [
  {
    id: 'deals-day',
    title: 'Deals of the Day',
    subtitle: '22 hrs left',
    products: getDealProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'best-electronics',
    title: 'Best of Electronics',
    subtitle: 'Top deals on electronics',
    products: getProductsByCategory('electronics').slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'fashion-sale',
    title: 'Fashion Sale',
    subtitle: 'Up to 70% off',
    products: getProductsByCategory('fashion').slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'home-essentials',
    title: 'Home Essentials',
    subtitle: 'Everything for your home',
    products: getProductsByCategory('home-kitchen').slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'mobile-phones',
    title: 'Best Selling Mobile Phones',
    subtitle: 'Latest smartphones',
    products: getProductsByCategory('mobiles').slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'tv-appliances',
    title: 'TV & Home Appliances',
    subtitle: 'Big savings on big items',
    products: getProductsByCategory('tvAppliances').slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'beauty-products',
    title: 'Beauty & Personal Care',
    subtitle: 'Look your best',
    products: getProductsByCategory('beautyToys').slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'toys-games',
    title: 'Toys & Games',
    subtitle: 'Fun for everyone',
    products: getProductsByCategory('beautyToys').slice(8, 16),
    type: 'carousel'
  },
  {
    id: 'furniture-deals',
    title: 'Furniture Deals',
    subtitle: 'Transform your space',
    products: getProductsByCategory('furniture').slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'grocery-staples',
    title: 'Grocery & Staples',
    subtitle: 'Daily essentials',
    products: getProductsByCategory('grocery').slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'travel-deals',
    title: 'Travel & Booking',
    subtitle: 'Plan your journey',
    products: getProductsByCategory('flights').slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'new-arrivals',
    title: 'New Arrivals',
    subtitle: 'Fresh collection',
    products: getNewArrivals().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'top-rated',
    title: 'Top Rated Products',
    subtitle: 'Customer favorites',
    products: getFeaturedProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'budget-buys',
    title: 'Budget Buys',
    subtitle: 'Under Rs.999',
    products: getAllProducts().filter(p => p.price < 999).slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'premium-picks',
    title: 'Premium Picks',
    subtitle: 'Luxury collection',
    products: getAllProducts().filter(p => p.price > 50000).slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'flash-sale',
    title: 'Flash Sale',
    subtitle: 'Limited time offer',
    products: getAllProducts().filter(p => p.discount >= 30).slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'festival-special',
    title: 'Festival Special',
    subtitle: 'Celebration deals',
    products: getAllProducts().filter(p => p.discount >= 20).slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'clearance-sale',
    title: 'Clearance Sale',
    subtitle: 'Stock clearance',
    products: getAllProducts().filter(p => p.discount >= 25).slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'combo-offers',
    title: 'Combo Offers',
    subtitle: 'Buy more save more',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'exchange-offers',
    title: 'Exchange Offers',
    subtitle: 'Get extra discount on exchange',
    products: getProductsByCategory('mobiles').slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'no-cost-emi',
    title: 'No Cost EMI',
    subtitle: 'Pay in easy installments',
    products: getAllProducts().filter(p => p.price > 10000).slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'student-deals',
    title: 'Student Deals',
    subtitle: 'Special offers for students',
    products: getProductsByCategory('electronics').slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'first-time-buyer',
    title: 'First Time Buyer',
    subtitle: 'Exclusive welcome offers',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'bank-offers',
    title: 'Bank Offers',
    subtitle: 'Additional 10% off with cards',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'seasonal-sale',
    title: 'Seasonal Sale',
    subtitle: 'End of season deals',
    products: getAllProducts().filter(p => p.discount >= 15).slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'brand-factory',
    title: 'Brand Factory',
    subtitle: 'Top brands at best prices',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'local-shop',
    title: 'Local Shop',
    subtitle: 'Support local businesses',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'gift-ideas',
    title: 'Gift Ideas',
    subtitle: 'Perfect gifts for every occasion',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'wedding-special',
    title: 'Wedding Special',
    subtitle: 'Everything for your big day',
    products: getProductsByCategory('fashion').slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'kitchen-essentials',
    title: 'Kitchen Essentials',
    subtitle: 'Cook like a pro',
    products: getProductsByCategory('home-kitchen').slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'work-from-home',
    title: 'Work From Home',
    subtitle: 'Setup your home office',
    products: getProductsByCategory('electronics').slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'fitness-gear',
    title: 'Fitness Gear',
    subtitle: 'Stay fit and healthy',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'baby-care',
    title: 'Baby Care',
    subtitle: 'Everything for your little one',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'pet-supplies',
    title: 'Pet Supplies',
    subtitle: 'Care for your pets',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'automotive',
    title: 'Automotive',
    subtitle: 'Car and bike accessories',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'sports-fitness',
    title: 'Sports & Fitness',
    subtitle: 'Gear up for your workout',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'books-media',
    title: 'Books & Media',
    subtitle: 'Read and watch',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'gaming-zone',
    title: 'Gaming Zone',
    subtitle: 'Level up your gaming',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'smart-home',
    title: 'Smart Home',
    subtitle: 'Make your home smart',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'office-supplies',
    title: 'Office Supplies',
    subtitle: 'Everything for your office',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'health-wellness',
    title: 'Health & Wellness',
    subtitle: 'Stay healthy',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'outdoor-adventure',
    title: 'Outdoor & Adventure',
    subtitle: 'Gear for adventure',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'party-supplies',
    title: 'Party Supplies',
    subtitle: 'Party essentials',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'religious-spiritual',
    title: 'Religious & Spiritual',
    subtitle: 'Spiritual essentials',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'kids-learning',
    title: 'Kids Learning',
    subtitle: 'Educational fun',
    products: getAllProducts().filter(p => p.category === 'beautyToys' || p.category === 'flights').slice(464, 476),
    type: 'carousel'
  },
  {
    id: 'teen-fashion',
    title: 'Teen Fashion',
    subtitle: 'Trendy styles',
    products: getProductsByCategory('fashion').slice(440, 480),
    type: 'carousel'
  },
  {
    id: 'college-essentials',
    title: 'College Essentials',
    subtitle: 'Student life',
    products: getAllProducts().filter(p => p.category === 'electronics' || p.category === 'fashion' || p.category === 'home-kitchen').slice(480, 496),
    type: 'carousel'
  },
  {
    id: 'office-essentials',
    title: 'Office Essentials',
    subtitle: 'Work productivity',
    products: getAllProducts().filter(p => p.category === 'electronics' || p.category === 'home-kitchen').slice(496, 512),
    type: 'carousel'
  },
  {
    id: 'diy-crafts',
    title: 'DIY Crafts',
    subtitle: 'Creative projects',
    products: getAllProducts().filter(p => p.category === 'home-kitchen' || p.category === 'beautyToys').slice(512, 528),
    type: 'carousel'
  },
  {
    id: 'gardening-tools',
    title: 'Gardening Tools',
    subtitle: 'Green thumb essentials',
    products: getProductsByCategory('home-kitchen').slice(528, 544),
    type: 'carousel'
  },
  {
    id: 'pet-health',
    title: 'Pet Health',
    subtitle: 'Wellness for pets',
    products: getAllProducts().filter(p => p.category === 'beautyToys').slice(544, 560),
    type: 'carousel'
  },
  {
    id: 'car-accessories',
    title: 'Car Accessories',
    subtitle: 'Auto upgrades',
    products: getProductsByCategory('electronics').slice(544, 576),
    type: 'carousel'
  },
  {
    id: 'bike-equipment',
    title: 'Bike Equipment',
    subtitle: 'Cycling essentials',
    products: getAllProducts().filter(p => p.category === 'electronics' || p.category === 'fashion').slice(576, 592),
    type: 'carousel'
  },
  {
    id: 'travel-tech',
    title: 'Travel Technology',
    subtitle: 'Smart travel gear',
    products: getAllProducts().filter(p => p.category === 'electronics' || p.category === 'flights').slice(592, 608),
    type: 'carousel'
  },
  {
    id: 'camping-gear',
    title: 'Camping Gear',
    subtitle: 'Outdoor adventures',
    products: getAllProducts().filter(p => p.category === 'electronics' || p.category === 'fashion' || p.category === 'home-kitchen').slice(608, 624),
    type: 'carousel'
  },
  {
    id: 'fishing-hunting',
    title: 'Fishing & Hunting',
    subtitle: 'Outdoor sports',
    products: getAllProducts().filter(p => p.category === 'electronics' || p.category === 'fashion' || p.category === 'home-kitchen').slice(624, 640),
    type: 'carousel'
  },
  {
    id: 'winter-sports',
    title: 'Winter Sports',
    subtitle: 'Cold weather gear',
    products: getAllProducts().filter(p => p.category === 'electronics' || p.category === 'fashion' || p.category === 'home-kitchen').slice(640, 656),
    type: 'carousel'
  },
  {
    id: 'summer-fashion',
    title: 'Summer Fashion',
    subtitle: 'Hot weather styles',
    products: getProductsByCategory('fashion').slice(592, 672),
    type: 'carousel'
  },
  {
    id: 'beach-essentials',
    title: 'Beach Essentials',
    subtitle: 'Summer fun',
    products: getAllProducts().filter(p => p.category === 'fashion' || p.category === 'home-kitchen').slice(672, 688),
    type: 'carousel'
  },
  {
    id: 'picnic-party',
    title: 'Picnic Party',
    subtitle: 'Outdoor dining',
    products: getProductsByCategory('home-kitchen').slice(688, 704),
    type: 'carousel'
  },
  {
    id: 'bbq-grilling',
    title: 'BBQ & Grilling',
    subtitle: 'Master the grill',
    products: getProductsByCategory('home-kitchen').slice(704, 720),
    type: 'carousel'
  },
  {
    id: 'pool-party',
    title: 'Pool Party',
    subtitle: 'Summer splash',
    products: getProductsByCategory('home-kitchen').slice(720, 736),
    type: 'carousel'
  },
  {
    id: 'garden-party',
    title: 'Garden Party',
    subtitle: 'Outdoor celebrations',
    products: getProductsByCategory('home-kitchen').slice(736, 752),
    type: 'carousel'
  },
  {
    id: 'holiday-decorations',
    title: 'Holiday Decorations',
    subtitle: 'Festive home',
    products: getProductsByCategory('home-kitchen').slice(752, 768),
    type: 'carousel'
  },
  {
    id: 'new-year-party',
    title: 'New Year Party',
    subtitle: 'Celebrate in style',
    products: getProductsByCategory('home-kitchen').slice(768, 784),
    type: 'carousel'
  },
  {
    id: 'valentine-special',
    title: 'Valentine Special',
    subtitle: 'Love is in the air',
    products: getAllProducts().filter(p => p.category === 'fashion' || p.category === 'beautyToys').slice(784, 800),
    type: 'carousel'
  },
  {
    id: 'mother-day',
    title: 'Mother Day',
    subtitle: 'For amazing moms',
    products: getAllProducts().filter(p => p.category === 'fashion' || p.category === 'beautyToys').slice(800, 816),
    type: 'carousel'
  },
  {
    id: 'father-day',
    title: 'Father Day',
    subtitle: 'For awesome dads',
    products: getAllProducts().filter(p => p.category === 'electronics' || p.category === 'fashion' || p.category === 'home-kitchen').slice(816, 832),
    type: 'carousel'
  },
  {
    id: 'graduation-party',
    title: 'Graduation Party',
    subtitle: 'Celebrate achievements',
    products: getAllProducts().filter(p => p.category === 'fashion' || p.category === 'beautyToys').slice(832, 848),
    type: 'carousel'
  },
  {
    id: 'back-to-school',
    title: 'Back to School',
    subtitle: 'Student essentials',
    products: getAllProducts().filter(p => p.category === 'electronics' || p.category === 'fashion' || p.category === 'beautyToys').slice(848, 864),
    type: 'carousel'
  },
  {
    id: 'teacher-appreciation',
    title: 'Teacher Appreciation',
    subtitle: 'Thank you educators',
    products: getAllProducts().filter(p => p.category === 'electronics' || p.category === 'fashion' || p.category === 'beautyToys').slice(864, 896),
    type: 'carousel'
  },
  {
    id: 'anniversary-gifts',
    title: 'Anniversary Gifts',
    subtitle: 'Celebrate together',
    products: getAllProducts().filter(p => p.category === 'fashion' || p.category === 'beautyToys').slice(896, 912),
    type: 'carousel'
  },
  {
    id: 'birthday-extravaganza',
    title: 'Birthday Extravaganza',
    subtitle: 'Party supplies',
    products: getAllProducts().filter(p => p.category === 'fashion' || p.category === 'beautyToys').slice(912, 928),
    type: 'carousel'
  },
  {
    id: 'wedding-registry',
    title: 'Wedding Registry',
    subtitle: 'Perfect gifts',
    products: getAllProducts().filter(p => p.category === 'fashion' || p.category === 'beautyToys').slice(928, 944),
    type: 'carousel'
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower',
    subtitle: 'Welcome celebrations',
    products: getAllProducts().filter(p => p.category === 'beautyToys').slice(944, 960),
    type: 'carousel'
  },
  {
    id: 'gender-reveal-party',
    title: 'Gender Reveal Party',
    subtitle: 'Big surprise',
    products: getAllProducts().filter(p => p.category === 'fashion' || p.category === 'beautyToys').slice(960, 976),
    type: 'carousel'
  },
  {
    id: 'retirement-party',
    title: 'Retirement Party',
    subtitle: 'Golden years',
    products: getAllProducts().filter(p => p.category === 'fashion' || p.category === 'beautyToys').slice(976, 992),
    type: 'carousel'
  },
  {
    id: 'housewarming-party',
    title: 'Housewarming Party',
    subtitle: 'New home essentials',
    products: getAllProducts().filter(p => p.category === 'home-kitchen').slice(992, 1008),
    type: 'carousel'
  },
  {
    id: 'corporate-gifts',
    title: 'Corporate Gifts',
    subtitle: 'Professional presents',
    products: getAllProducts().filter(p => p.category === 'electronics' || p.category === 'fashion' || p.category === 'beautyToys').slice(1008, 1024),
    type: 'carousel'
  },
  {
    id: 'employee-awards',
    title: 'Employee Awards',
    subtitle: 'Recognition gifts',
    products: getAllProducts().filter(p => p.category === 'electronics' || p.category === 'fashion' || p.category === 'beautyToys').slice(1024, 1040),
    type: 'carousel'
  },
  {
    id: 'client-appreciation',
    title: 'Client Appreciation',
    subtitle: 'Thank you gifts',
    products: getAllProducts().filter(p => p.category === 'electronics' || p.category === 'fashion' || p.category === 'beautyToys').slice(1040, 1056),
    type: 'carousel'
  },
  {
    id: 'milestone-celebrations',
    title: 'Milestone Celebrations',
    subtitle: 'Life achievements',
    products: getAllProducts().filter(p => p.category === 'electronics' || p.category === 'fashion' || p.category === 'beautyToys').slice(1056, 1072),
    type: 'carousel'
  },
  {
    id: 'seasonal-clearance',
    title: 'Seasonal Clearance',
    subtitle: 'End of season deals',
    products: getAllProducts().filter(p => p.discount >= 40).slice(1072, 1088),
    type: 'carousel'
  },
  {
    id: 'flash-friday',
    title: 'Flash Friday',
    subtitle: 'Weekly mega deals',
    products: getAllProducts().filter(p => p.discount >= 50).slice(1088, 1104),
    type: 'carousel'
  },
  {
    id: 'cyber-monday',
    title: 'Cyber Monday',
    subtitle: 'Online exclusive deals',
    products: getAllProducts().filter(p => p.discount >= 25).slice(1104, 1120),
    type: 'carousel'
  },
  {
    id: 'black-friday-preview',
    title: 'Black Friday Preview',
    subtitle: 'Early access deals',
    products: getAllProducts().filter(p => p.discount >= 35).slice(1120, 1136),
    type: 'carousel'
  },
  {
    id: 'black-friday-main',
    title: 'Black Friday Main Event',
    subtitle: 'Biggest sale of the year',
    products: getAllProducts().filter(p => p.discount >= 60).slice(1136, 1152),
    type: 'carousel'
  },
  {
    id: 'christmas-countdown',
    title: 'Christmas Countdown',
    subtitle: 'Holiday deals daily',
    products: getAllProducts().filter(p => p.category === 'fashion' || p.category === 'beautyToys' || p.category === 'home-kitchen').slice(1152, 1168),
    type: 'carousel'
  },
  {
    id: 'new-year-eve',
    title: 'New Year Eve',
    subtitle: 'Year-end celebration',
    products: getAllProducts().filter(p => p.category === 'fashion' || p.category === 'beautyToys').slice(1168, 1200),
    type: 'carousel'
  },
  {
    id: 'handicrafts',
    title: 'Handicrafts',
    subtitle: 'Traditional crafts',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'vintage-collection',
    title: 'Vintage Collection',
    subtitle: 'Classic items',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'eco-friendly',
    title: 'Eco Friendly',
    subtitle: 'Sustainable products',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'tech-accessories',
    title: 'Tech Accessories',
    subtitle: 'Gadgets and accessories',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'musical-instruments',
    title: 'Musical Instruments',
    subtitle: 'Play your music',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'photography',
    title: 'Photography',
    subtitle: 'Capture moments',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  },
  {
    id: 'art-craft',
    title: 'Art & Craft',
    subtitle: 'Creative supplies',
    products: getAllProducts().slice(0, 8),
    type: 'carousel'
  }
]

// Accordion sections data for homepage
export const accordionSections = [
  {
    id: 'customer-service',
    title: 'Customer Service',
    subtitle: 'Frequently asked questions and help',
    items: [
      {
        question: 'How do I track my order?',
        answer: 'Tracking your order on our platform is a seamless and straightforward process designed to give you complete visibility into your purchase journey. To begin tracking, simply navigate to the "My Orders" section in your user profile dashboard, which can be accessed by clicking on your account name in the top right corner of any page. Once in the orders section, you\'ll find a comprehensive list of all your current and past orders, each displaying essential information including order date, total amount, and current status. For real-time tracking, you have multiple convenient options: enter your unique order ID in the search bar provided, or alternatively, click directly on the specific order you wish to track. The system will immediately display detailed tracking information including the current location of your package, estimated delivery date, and a complete timeline of all transit milestones. Additionally, we automatically send tracking updates to your registered email address and mobile number via SMS as soon as your order ships. These notifications contain direct tracking links that you can click for instant access to your order status. Our advanced tracking system integrates with multiple logistics partners to provide you with accurate, up-to-the-minute information about your package\'s journey from our warehouse to your doorstep. You can also enable push notifications in our mobile app to receive real-time alerts about your order status changes. For international orders, tracking includes customs clearance status and international transit details. If you encounter any issues with tracking or need clarification about any status update, our 24/7 customer support team is always available to assist you through live chat, email, or phone support.',
        icon: '📦',
        badge: 'Popular',
        links: [
          { text: 'Track Order', url: '/orders' },
          { text: 'Contact Support', url: '/help' }
        ]
      },
      {
        question: 'What is the return policy?',
        answer: 'Our comprehensive return policy is designed to ensure your complete satisfaction with every purchase. We offer a generous 30-day return window for most product categories, giving you ample time to evaluate your purchase and make an informed decision. To initiate a return, the product must be in its original condition with all manufacturer tags, packaging, and accessories intact. Electronics and appliances have a slightly different return policy with a 15-day window due to their nature, while fashion items enjoy our standard 30-day return period. The return process is entirely hassle-free: simply log into your account, navigate to "My Orders," select the item you wish to return, and follow the intuitive return initiation process. You\'ll need to provide a brief reason for the return, which helps us improve our services. Once approved, we schedule a free pickup from your preferred address at a time convenient for you. Our pickup partners will inspect the item briefly to ensure it meets return criteria before collecting it. After the item reaches our warehouse and passes quality inspection, we initiate the refund process. Refunds are typically processed within 5-7 business days and are credited to your original payment method. For cash on delivery orders, we offer bank transfers or store credit options. We also provide instant refunds for select products and customer categories. In case you receive a damaged or defective item, we offer immediate replacement or refund options without any additional verification requirements. Our return policy also covers wrong item deliveries, with priority processing for such cases. For customized or personalized items, returns are only accepted if there\'s a manufacturing defect or error on our part. Seasonal items and special promotional products may have different return terms, which are clearly mentioned on the product page. We believe in transparency, so all return-related information, including any applicable restocking fees, is clearly communicated before you complete your purchase.',
        icon: '🔄',
        links: [
          { text: 'Return Policy', url: '/return-policy' },
          { text: 'Initiate Return', url: '/returns' }
        ]
      },
      {
        question: 'How do I cancel my order?',
        answer: 'Order cancellation is designed to be flexible and customer-friendly, with multiple options available depending on your order status. For orders that haven\'t yet been processed for shipping, you can cancel them instantly through your account dashboard. Simply navigate to "My Orders," locate the specific order, and click the "Cancel" button. The system will immediately process your cancellation and initiate a full refund if payment has already been made. For orders paid via credit card, debit card, or net banking, refunds are typically processed within 3-5 business days, though the exact timing may vary depending on your bank\'s processing times. For UPI and wallet payments, refunds are usually instant or processed within 24 hours. Cash on delivery orders don\'t require any refund processing since payment hasn\'t been made yet. If your order has already been handed over to our logistics partners but hasn\'t been delivered, you still have cancellation options, though the process might take slightly longer. In such cases, you need to contact our customer support team immediately, who will coordinate with the delivery partners to attempt order interception. Success rates for post-dispatch cancellations depend on how far along the delivery process is, but our team makes every effort to accommodate your request. Once an order is delivered, cancellation is no longer possible, but you can always initiate a return through our standard return process. We also offer a unique "cooling-off period" for high-value items, allowing you to cancel within 24 hours of order placement even if processing has begun, subject to certain conditions. For bulk orders or corporate purchases, special cancellation terms may apply, which are communicated during the ordering process. Our mobile app also provides push notifications for order status changes, ensuring you never miss the window for easy cancellation. In case of any technical difficulties during the cancellation process, our customer support team is available 24/7 to assist you with manual cancellation requests.',
        icon: '❌',
        links: [
          { text: 'Cancel Order', url: '/orders' }
        ]
      },
      {
        question: 'What payment methods are accepted?',
        answer: 'We offer an extensive range of payment options to ensure maximum convenience and security for our customers. Our platform accepts all major credit cards including Visa, Mastercard, American Express, and Discover, ensuring you can use your preferred card without any hassle. Debit cards from all major banks are also fully supported, with the same level of security and processing speed as credit cards. For those who prefer digital payments, we support UPI (Unified Payments Interface) through all major apps including Google Pay, PhonePe, Paytm, and BHIM, offering instant payment confirmation and seamless checkout experience. Net banking is available for over 100 banks across India, covering both public and private sector banks, with real-time payment confirmation and automated order processing. Digital wallets are fully integrated into our payment ecosystem, including Paytm Wallet, PhonePe Wallet, Amazon Pay Balance, MobiKwik, and Freecharge, allowing you to use your stored balances for quick purchases. For customers who prefer cash transactions, we offer Cash on Delivery (COD) for orders up to ₹50,000, with the option to pay via cash or digital payment methods at the time of delivery. We also support EMI (Equated Monthly Installments) on all major credit cards and select debit cards, with tenure options ranging from 3 to 24 months. No-cost EMI options are available on select products and through specific bank partnerships, making expensive purchases more affordable. For international customers, we accept international credit cards and select digital payment methods, with currency conversion handled automatically at competitive exchange rates. Corporate and bulk orders can be paid through bank transfers, with special payment terms available for regular business customers. We also have gift card and voucher support, allowing you to use promotional credits and gift balances during checkout. All payment transactions are secured with industry-standard encryption and comply with PCI DSS standards, ensuring your financial information remains protected at all times. Our payment gateway also supports 3D Secure authentication for additional security on card transactions.',
        icon: '💳',
        badge: 'New',
        links: [
          { text: 'Payment Options', url: '/payment-options' }
        ]
      }
    ]
  },
  {
    id: 'shipping-delivery',
    title: 'Shipping & Delivery',
    subtitle: 'Everything about delivery',
    items: [
      {
        question: 'What are the delivery charges?',
        answer: 'Our delivery charge structure is designed to be fair, transparent, and customer-friendly, with multiple options to suit different needs and budgets. For all orders above ₹500, we offer completely free standard delivery across India, making it easy and affordable to shop for your favorite products without worrying about additional shipping costs. For orders below ₹500, we apply a nominal delivery charge that varies based on your location and the size/weight of your order package. The delivery charges typically range from ₹40 to ₹80 for standard shipping within metropolitan areas, while remote locations might incur slightly higher charges due to increased logistics costs. We believe in complete transparency, so all delivery charges are clearly displayed during the checkout process before you confirm your order, ensuring there are no hidden fees or surprises. For our premium customers and those with membership programs, we offer enhanced delivery benefits including free express shipping and waived delivery charges on all orders regardless of order value. We also frequently run promotional campaigns offering free delivery on specific product categories or during festive seasons, helping you save even more on your purchases. For bulk orders and corporate purchases, we provide customized shipping solutions with competitive rates based on volume and frequency. International shipping charges, when available, are calculated based on package weight, dimensions, destination country, and applicable customs duties. We also offer special delivery options like scheduled delivery, where you can choose a specific time slot for your delivery, though this might come with additional charges. Our delivery charges are regularly reviewed and optimized to ensure they remain competitive while maintaining the high quality of service that our customers expect and deserve.',
        icon: '🚚',
        links: [
          { text: 'Delivery Info', url: '/delivery' }
        ]
      },
      {
        question: 'How long does delivery take?',
        answer: 'Delivery timelines vary based on multiple factors including your location, product availability, and chosen delivery method, but we strive to get your orders to you as quickly as possible. Standard delivery typically takes 4-7 business days for most locations across India, with major metropolitan cities often receiving their orders within 3-4 business days. For those who need their items urgently, we offer express delivery options that can reduce delivery time to 2-3 business days for an additional fee. In major cities like Delhi, Mumbai, Bangalore, Chennai, and Hyderabad, we also provide same-day delivery for eligible items when ordered before a specific cutoff time, usually around 12 PM. This service is perfect for last-minute needs and emergency purchases. For international destinations, delivery times range from 7-21 business days depending on the country and shipping method chosen. We also offer scheduled delivery options where you can select a specific date and time slot that works best for your schedule, though this might extend the overall delivery time by a day or two. During peak seasons like festivals, sales events, or holidays, delivery times might be slightly longer due to increased order volumes, but we always communicate any expected delays proactively. Our advanced logistics network includes multiple fulfillment centers across India, enabling us to ship from the location nearest to you, thereby reducing delivery times. For pre-order items or products with custom manufacturing requirements, delivery times are clearly mentioned on the product page, and you\'ll receive regular updates about the production and shipping progress. We also provide real-time tracking for all orders, allowing you to monitor your package\'s journey from our warehouse to your doorstep with detailed status updates at every step.',
        icon: '⏱️',
        badge: 'Important'
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Currently, our primary shipping services are focused on the Indian market, ensuring fast, reliable, and cost-effective delivery across all states and union territories. However, we understand the growing demand from our international customers and are actively working on expanding our shipping capabilities to include select international destinations. Our international shipping expansion is being planned in phases, with initial focus on major countries including the United States, United Kingdom, Canada, Australia, and several countries in the Middle East and Southeast Asia. When international shipping becomes available, we will offer multiple shipping options including standard international shipping, express international delivery, and economy international shipping to suit different budgets and urgency levels. International orders will be handled through our trusted global logistics partners, ensuring reliable delivery and proper tracking throughout the journey. For international shipments, customers will be responsible for any applicable customs duties, taxes, or import fees as per their country\'s regulations, and these charges will be clearly communicated during the checkout process. We will also provide comprehensive documentation support including commercial invoices, certificates of origin, and any other required paperwork to ensure smooth customs clearance. Our international shipping will include insurance coverage for all orders, providing peace of mind in case of any transit-related issues. We plan to offer customer support in multiple languages and time zones to assist our international customers effectively. While we work on launching our international shipping services, customers residing outside India can explore our international shipping partners or use package forwarding services to receive our products. We regularly update our website and social media channels about our international shipping progress, so we encourage interested customers to stay tuned for announcements about when we\'ll begin shipping to their specific country.',
        icon: '🌍'
      },
      {
        question: 'What if I\'m not available during delivery?',
        answer: 'We understand that life can be unpredictable, and you might not always be available when your package arrives. That\'s why we\'ve implemented a flexible and customer-friendly delivery system designed to accommodate various scenarios. Our delivery partners will typically attempt delivery twice on the same day if the first attempt is unsuccessful. If you\'re not available during the first attempt, the delivery agent will try to contact you via phone call or SMS to coordinate a better time for redelivery. You also have the option to reschedule your delivery through our website or mobile app by selecting a preferred date and time slot that works with your schedule. For added convenience, we offer multiple delivery alternatives if you know you won\'t be available: you can authorize delivery to a neighbor, family member, or colleague at the same address, or provide specific instructions for the delivery person regarding where to leave the package safely. Many of our delivery partners also offer secure drop-off points where you can collect your package at your convenience, including nearby retail stores, lockers, or collection centers. If you prefer, you can also arrange to collect your package from the nearest logistics hub or warehouse, though this might require prior coordination and identification verification. For valuable items or those requiring signature confirmation, we offer scheduled delivery windows where you can choose a specific 2-hour time slot for delivery, ensuring you\'re available when the package arrives. Our mobile app provides real-time delivery tracking with estimated arrival times, allowing you to plan your day accordingly. If multiple delivery attempts fail, the package will be held at a local facility for a specified period, during which you can arrange collection or final delivery. We also provide the option to designate an alternate delivery address during the ordering process, such as your workplace or a friend\'s house, ensuring someone is available to receive the package.',
        icon: '📅'
      }
    ]
  },
  {
    id: 'payment-security',
    title: 'Payment & Security',
    subtitle: 'Safe and secure payments',
    items: [
      {
        question: 'Is it safe to use my credit/debit card?',
        answer: 'Absolutely! We take payment security extremely seriously and have implemented multiple layers of protection to ensure your financial information remains completely secure at all times. Our platform is fully PCI DSS (Payment Card Industry Data Security Standard) compliant, which is the highest standard of security for payment processing. We use industry-standard 256-bit SSL (Secure Sockets Layer) encryption technology to create a secure, encrypted connection between your device and our servers, ensuring that all sensitive information transmitted during payment is protected from unauthorized access. Your credit and debit card details are never stored on our servers in their complete form; instead, we use tokenization technology where sensitive card information is replaced with a unique token that can only be used for specific transactions. This means even in the unlikely event of a data breach, your actual card details would remain secure. We also implement 3D Secure authentication (Verified by Visa, Mastercard SecureCode, etc.) for an additional layer of protection, requiring you to enter a one-time password sent to your registered mobile number for card transactions. Our payment gateway partners are certified by leading security organizations and undergo regular security audits to maintain the highest standards. We also employ advanced fraud detection systems that monitor transactions in real-time for any suspicious activity, helping prevent unauthorized use of your payment information. For added security, we offer two-factor authentication for account access and sensitive operations. Our systems are regularly updated with the latest security patches and we maintain a dedicated security team that works around the clock to monitor and protect against emerging threats. We also provide detailed transaction history and instant email/SMS notifications for all payment activities, allowing you to quickly identify and report any unauthorized transactions. In the rare event of any security concern, our 24/7 customer support team is trained to handle security issues promptly and efficiently.',
        icon: '🔒',
        badge: 'Security'
      },
      {
        question: 'What is Cash on Delivery (COD)?',
        answer: 'Cash on Delivery (COD) is one of our most popular payment methods, designed to provide maximum convenience and trust for our customers, especially those who prefer to pay only after receiving and inspecting their products. COD allows you to place an order online and pay the full amount in cash when the delivery person arrives at your doorstep. This payment method is available for orders up to ₹50,000, making it suitable for most types of purchases including electronics, fashion, home appliances, and more. For COD orders, we typically charge a small convenience fee of ₹40, which covers the additional processing costs associated with cash handling and multiple delivery attempts. This fee is clearly displayed during checkout before you confirm your order. When your order arrives, our delivery partner will accept payment in cash and will provide you with an official receipt for your records. Please ensure you have the exact amount ready as delivery persons may not always have change for large denominations. For security reasons, COD orders require mobile number verification, and you may be asked to show a valid ID proof during delivery to prevent fraudulent orders. COD is particularly beneficial for first-time customers who want to build trust with our platform, or for customers who are uncomfortable sharing payment information online. However, please note that COD orders cannot be cancelled once they are dispatched from our warehouse, and returns follow the same process as other payment methods. We also offer digital payment on delivery options where you can pay using UPI, mobile wallets, or card swipe when the delivery arrives, combining the security of digital payments with the convenience of paying on receipt. COD is not available for certain categories like perishable items, customized products, or international orders due to logistical and security considerations.',
        icon: '💵',
        links: [
          { text: 'COD Guidelines', url: '/cod-info' }
        ]
      },
      {
        question: 'How do EMI options work?',
        answer: 'Equated Monthly Installments (EMI) make expensive purchases more affordable by allowing you to pay for your order in manageable monthly installments instead of a single lump sum payment. We offer EMI options on all major credit cards including Visa, Mastercard, American Express, and select debit cards from leading banks. The EMI process is simple and transparent: when you proceed to checkout, you can select the EMI option if your order value meets the minimum requirement (typically ₹3,000 and above). You\'ll then see available tenure options ranging from 3 to 24 months, with each option showing the monthly installment amount, interest rate, and total amount payable. For select products and through partnerships with specific banks, we also offer no-cost EMI where the total amount you pay remains the same as the product price, with the interest component being subsidized by the bank or manufacturer. The EMI amount is automatically charged to your credit card each month on the billing date, and you continue to earn any rewards points or cashback that your card normally offers. To be eligible for EMI, your credit card must have sufficient available credit limit for the entire purchase amount, and you may need to complete additional verification with your bank for larger EMI transactions. We also offer EMI on debit cards for select banks, where the monthly amount is auto-debited from your bank account. The EMI facility can be used in combination with other discounts and offers, making it an excellent way to purchase high-value items during sales. If you wish to pre-close your EMI, you can contact your bank directly, though they may charge a nominal pre-closure fee as per their policies. All EMI transactions are clearly documented in your monthly credit card statements, and you can track your EMI details through our mobile app as well.',
        icon: '📊',
        badge: 'Popular'
      },
      {
        question: 'What if my payment fails?',
        answer: 'Payment failures can occur due to various reasons, but we\'ve implemented robust systems to handle such situations efficiently and ensure you face minimal inconvenience. If your payment fails during checkout, our system immediately displays the specific reason for failure, helping you understand and resolve the issue quickly. Common reasons include insufficient funds, incorrect card details, expired cards, daily transaction limits exceeded, or temporary issues with your bank\'s servers. In most cases, if payment fails, the amount is automatically refunded to your original payment method within 3-7 business days, depending on your bank\'s processing times. For UPI and wallet payments, refunds are typically processed instantly or within 24 hours. You don\'t need to take any action for these refunds to process, as they happen automatically. After a payment failure, you can immediately try again with the same payment method after resolving the issue (like checking card details or ensuring sufficient balance), or you can switch to a different payment method altogether. Our system saves your cart and order details, so you won\'t lose any products or configurations you\'ve selected. If multiple payment attempts fail, our customer support team can assist you in identifying the root cause and suggest alternative payment options. In rare cases where payment is deducted from your account but the order is not confirmed, our system automatically detects such discrepancies and initiates refund processing while also flagging the order for manual verification. We also send instant email and SMS notifications for all payment activities, including failures, so you\'re always informed about the status of your transactions. For recurring payment failures, we recommend checking with your bank to ensure there are no blocks on your card or that your online transaction limits are sufficient for your purchase amount.',
        icon: '⚠️'
      }
    ]
  },
  {
    id: 'product-info',
    title: 'Product Information',
    subtitle: 'Details about our products',
    items: [
      {
        question: 'Are all products genuine?',
        answer: 'Absolutely! We guarantee 100% authenticity for every product sold on our platform, and we take this commitment extremely seriously. Our sourcing process is designed to ensure that every item you purchase is genuine and comes with full manufacturer backing. We work directly with brands and their authorized distributors, eliminating any possibility of counterfeit or fake products entering our inventory. Each product listing on our platform undergoes rigorous verification process where our team validates the authenticity of the product, checks the seller\'s credentials, and ensures all necessary documentation is in place. For high-value items like electronics, luxury goods, and branded products, we implement additional verification steps including serial number tracking and manufacturer authentication codes. All products come with original manufacturer warranty, and you receive the same warranty terms as you would get from buying directly from the brand. We also provide warranty cards and original packaging whenever possible. In the rare event that you receive a product that you suspect is not genuine, we have a robust resolution process: our team will investigate the claim, and if confirmed, we\'ll not only provide a full refund but also take strict action against the seller, including permanent removal from our platform. We also encourage customers to verify authenticity through manufacturer websites or customer service, and we provide all necessary information to help you do so. Our commitment to authenticity extends to all product categories, whether it\'s electronics, fashion, home appliances, books, or any other category. We regularly audit our sellers and their inventory to maintain the highest standards of product authenticity. This commitment to genuine products is why millions of customers trust us for their purchases, knowing they\'ll receive exactly what they ordered - authentic, high-quality products with full manufacturer support and warranty coverage.',
        icon: '✅',
        badge: 'Guaranteed'
      },
      {
        question: 'How do I know if a product is in stock?',
        answer: 'Product availability is clearly and prominently displayed on every product page to help you make informed purchasing decisions. We use a real-time inventory management system that synchronizes stock levels across all our fulfillment centers, ensuring the information you see is accurate and up-to-date. When you visit a product page, you\'ll see one of several clear stock indicators: "In Stock" means the product is available and can be shipped immediately, typically within 24 hours; "Limited Stock" indicates that only a few units remain and you should order quickly to avoid disappointment; "Out of Stock" means the product is temporarily unavailable, but you can choose to be notified when it becomes available again; "Pre-order" is used for upcoming products that haven\'t been released yet but can be ordered in advance. For products with variants like different sizes, colors, or configurations, stock levels are shown for each specific variant, allowing you to see exactly which options are available. We also provide estimated restock dates for out-of-stock items whenever this information is available from our suppliers. Our mobile app and website both offer stock notifications - you can enable alerts for specific products, and we\'ll notify you via email or push notification as soon as they\'re back in stock. During high-demand periods like sales or festivals, our inventory updates are even more frequent, sometimes refreshing every few minutes to ensure accuracy. We also display the number of units sold recently for popular products, giving you an indication of demand and helping you make quick decisions. For items that are permanently discontinued, we clearly mark them as such and may suggest similar alternatives from the same category or brand.',
        icon: '📋'
      },
      {
        question: 'Can I get product demonstrations?',
        answer: 'Yes! We understand that making informed purchase decisions often requires seeing products in action, which is why we offer comprehensive product demonstration services for select categories, particularly electronics, appliances, and technical products. Our virtual demonstration service allows you to schedule one-on-one sessions with our product experts who will walk you through the features, functionality, and usage of products you\'re interested in. These demonstrations are conducted through video calls, screen sharing, or interactive virtual sessions where you can ask questions in real-time and see the product being used live. For complex products like smartphones, laptops, cameras, and home appliances, our experts can demonstrate specific features, compare different models, and even help you understand setup processes. We also have an extensive library of pre-recorded demonstration videos available 24/7 on our website and YouTube channel, covering hundreds of products across various categories. These videos range from quick overviews to detailed tutorials, helping you understand products better before making a purchase. For high-value items, we sometimes offer in-person demonstration appointments at our experience centers in major cities, where you can physically interact with products before buying. Our product experts are trained professionals who receive regular updates from manufacturers about new features and can provide unbiased, detailed information about pros and cons of different products. They can also help you compare multiple products side-by-side, discuss your specific needs and budget, and recommend the best options. Demonstration services are typically free of charge and come with no obligation to purchase. You can schedule demonstrations through our website, mobile app, or by calling our customer service team.',
        icon: '🎥',
        links: [
          { text: 'Product Demo', url: '/demo' }
        ]
      },
      {
        question: 'What about product warranties?',
        answer: 'Product warranties are an essential part of our commitment to quality and customer satisfaction, and we ensure that every product you purchase comes with appropriate warranty coverage. All products on our platform include the standard manufacturer warranty that you would receive when buying from any authorized retailer - there are no compromises or shortened warranty periods. Warranty details are clearly mentioned on every product page, including the duration (typically 1-3 years for electronics, 6 months to 2 years for appliances, and varying periods for other categories), coverage terms, and information about what\'s included and excluded. For many products, we also offer extended warranty options that you can purchase during checkout, providing additional coverage beyond the standard manufacturer warranty. These extended warranties are provided by reputable third-party warranty providers and cover things like accidental damage, extended mechanical breakdown, and sometimes even routine maintenance. When you receive your order, we include all warranty documentation, warranty cards, and information about how to register your warranty with the manufacturer. We also maintain digital copies of all warranty documents in your account, accessible anytime through our website or mobile app. Our customer service team is trained to help with warranty claims and can guide you through the process of contacting manufacturers or warranty providers. We also offer warranty tracking services where you can set reminders for warranty expiration dates and receive notifications about any warranty-related updates. For products that require installation or setup, we ensure that warranty coverage starts from the date of installation rather than purchase, providing you with full benefit. In case of any warranty disputes or issues, we advocate on your behalf with manufacturers to ensure you receive the service you\'re entitled to. Our commitment to warranty support extends to helping you understand warranty terms, process claims efficiently, and ensuring your rights as a consumer are protected throughout the warranty period.',
        icon: '🛡️'
      }
    ]
  },
  {
    id: 'account-help',
    title: 'Account & Profile',
    subtitle: 'Manage your account',
    items: [
      {
        question: 'How do I create an account?',
        answer: 'Creating an account on our platform is designed to be quick, simple, and secure, taking less than 2 minutes from start to finish. To begin, click on the "Sign Up" button prominently displayed on our homepage and login page. You\'ll be presented with a straightforward registration form where you can choose to register using either your email address or mobile number - whichever is more convenient for you. Once you enter your preferred contact information, we\'ll send a One-Time Password (OTP) to verify your identity and ensure the security of your account. This OTP verification typically arrives within seconds via SMS or email, depending on your chosen registration method. After entering the correct OTP, you\'ll be directed to create a strong password for your account. We recommend using a combination of uppercase and lowercase letters, numbers, and special characters for maximum security. You can also add optional security questions and enable two-factor authentication for enhanced protection. Once your account is created, you\'ll receive a welcome email with all the information you need to get started, including tips for account security and a quick guide to our features. Your new account comes with several benefits: you can save multiple shipping addresses, track order history, create wishlists, receive personalized recommendations, and access exclusive member-only deals. We also offer social media login options where you can register using your Google, Facebook, or Apple accounts for even faster registration. Your account information is encrypted and stored securely, and we never share your personal data with third parties without your explicit consent. If you face any issues during registration, our 24/7 customer support team is ready to assist you through live chat, phone, or email.',
        icon: '👤',
        badge: 'Quick'
      },
      {
        question: 'How do I reset my password?',
        answer: 'Password reset is a secure and straightforward process designed to help you regain access to your account quickly while maintaining security. If you\'ve forgotten your password, simply click on the "Forgot Password" link located on the login page. You\'ll be asked to enter your registered email address or mobile number - the same one you used during account creation. Our system will then send a verification OTP to your registered contact method to verify your identity. This OTP is typically valid for 10 minutes to ensure security. After entering the correct OTP, you\'ll be redirected to a secure password reset page where you can create a new password. We recommend choosing a strong password that\'s at least 8 characters long and includes a mix of letters, numbers, and special characters. For added security, we don\'t allow you to reuse your last 3 passwords, and our system will prompt you if the new password is too similar to previous ones. Once you\'ve successfully reset your password, you\'ll receive an immediate confirmation email or SMS informing you about the password change activity. If you didn\'t initiate this password reset, we recommend contacting our support team immediately as this could indicate unauthorized access attempts. We also recommend enabling two-factor authentication for additional account security after you\'ve reset your password. The entire password reset process typically takes less than 5 minutes from start to finish, and you can immediately access your account with your new credentials. For security reasons, we automatically log you out from all other devices and sessions when you reset your password.',
        icon: '🔑'
      },
      {
        question: 'Can I have multiple addresses?',
        answer: 'Absolutely! We understand that our customers have different delivery needs depending on their lifestyle, work schedules, and family requirements, which is why we offer a comprehensive multiple address management system. You can save unlimited delivery addresses in your profile, making checkout faster and more convenient for future orders. To add a new address, simply go to "My Profile" section and click on "Manage Addresses" or "Address Book." From there, you can add multiple types of addresses including your home address, office address, family member addresses, or even temporary addresses like hotels or vacation homes. For each address, you can save detailed information including house/flat number, street name, area, landmark, city, state, PIN code, and contact phone number for that location. You can also set a default address that will be automatically selected during checkout, though you always have the option to choose a different address for specific orders. Our system allows you to label each address (like "Home," "Office," "Parents\' House") for easy identification. For added convenience, you can also specify different delivery instructions for each address, such as "Deliver to security guard" or "Call before delivery." All addresses are stored securely and can be edited or deleted at any time. During checkout, you can also add a new one-time address without saving it permanently, perfect for gifts or special deliveries. Our mobile app also allows you to use GPS to quickly add your current location as a delivery address. For corporate customers, we offer bulk address import functionality where you can upload multiple addresses at once using a spreadsheet format.',
        icon: '🏠',
        links: [
          { text: 'Manage Addresses', url: '/profile/addresses' }
        ]
      },
      {
        question: 'How do I update my contact details?',
        answer: 'Updating your contact details is designed to be simple and flexible, allowing you to keep your account information current at all times. To update your personal information, navigate to the "My Profile" section in your account dashboard and click on "Edit Profile" or "Update Profile." From this centralized interface, you can modify various aspects of your account including your primary email address, mobile number, name, date of birth, gender, and other demographic information. For email changes, we require verification of the new email address through a confirmation link sent to both your old and new email addresses, ensuring security and preventing unauthorized changes. Mobile number updates follow a similar OTP verification process to maintain account security. You can also update your communication preferences, choosing how you want to receive notifications - via email, SMS, push notifications, or WhatsApp. For profile information like your profile picture, bio, or social media links, you can update these instantly without verification requirements. We maintain a history of all profile changes, so you can review what information was modified and when. Some sensitive changes, like email or mobile number, may have a cooling-off period where the change takes effect after 24 hours, giving you time to cancel if the change was made accidentally. Our system also allows you to set privacy controls for different types of information, choosing what\'s visible to other users and what remains private. All updates are synchronized across our website, mobile app, and other platforms in real-time, ensuring your information is consistent everywhere.',
        icon: '✏️'
      }
    ]
  }
]
