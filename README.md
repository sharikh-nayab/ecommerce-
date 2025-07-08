# E-Commerce Project

## Overview
This React-based e-commerce frontend demonstrates key UI and functionality:

- **Header**: Custom header with logo, search box, and authentication links.
- **Authentication**: Sign In and Sign Up pages with form validation and API integration.
- **Product Listing**: Category filter, search, and sorting options.
- **Product Details**: Detailed view and order initiation.
- **Order Flow**: 3-step stepper for order placement.
- **Admin Management**: Add, modify, and delete products.

## Features

### Header
- Background color: `#3f51b5`
- Logo positioned left.
- Search box centered, filtering product list in real-time.
- **Login** and **Sign Up** links positioned right.

### Authentication
- **Sign In** page:
  - Fields: Email & Password.
  - API endpoint: `POST /api/auth/signin`
  - Displays success or failure messages.
- **Sign Up** page:
  - Fields: First Name, Last Name, Email, Password, Confirm Password, Contact Number.
  - API endpoint: `POST /api/auth/signup`
  - Form validation for required fields and password match.

### Product Listing
- Categories loaded from `public/categories.json`.
- Default “All” category on load.
- Category filter and real-time search integration.
- Sorting options: Price (ascending/descending) and Name (A-Z/Z-A).
- Data loaded from `public/products.json`.

### Product Details
- Fetches single product by ID.
- Displays name, price, description.
- **Place Order** button navigates to order flow.

### Order Flow
1. **Step 1**: Review selected product.
2. **Step 2**: Enter or select address.
3. **Step 3**: Review order and confirm.
- Navigation with **Next** and **Back** buttons.
- On confirmation, redirects to product list with success message.

### Admin Management
- Visible **Add Product** link for admin users.
- **Add Product** page: API `POST /api/products`
- **Modify Product** page: API `PUT /api/products/:id`
- **Delete Product** modal: API `DELETE /api/products/:id`
- Real-time UI updates after CRUD operations.

## Project Structure
```
ecommerce_project/
├── public/
│   ├── index.html
│   ├── logo.svg
│   ├── products.json
│   └── categories.json
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── DeleteProductModal.js
│   ├── screens/
│   │   ├── SignIn.js
│   │   ├── SignUp.js
│   │   ├── ProductList.js
│   │   ├── ProductDetails.js
│   │   ├── OrderStepper.js
│   │   ├── ManageProducts.js
│   │   ├── AddProduct.js
│   │   └── ModifyProduct.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Installation
```bash
npm install
npm start
```

## Build
```bash
npm run build
```

## APIs
- Sign In: `POST /api/auth/signin`
- Sign Up: `POST /api/auth/signup`
- Fetch Products: `GET /products.json` (placeholder for `/api/products`)
- Add Product: `POST /api/products`
- Modify Product: `PUT /api/products/:id`
- Delete Product: `DELETE /api/products/:id`

## Coding Guidelines
- Component-based architecture with reusable components.
- Proper folder structure: `components/`, `screens/`, `common/`.
- Clean formatting, indentation, and comments.
- Incremental commits with meaningful messages.

## License
MIT
