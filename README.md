# 🛒 E-Commerce Backend

A scalable and secure **backend for an e-commerce platform** built with **Node.js, Express, and MongoDB**.  
This project provides user authentication, product management, cart & wishlist functionality, and order processing.

---

## 🚀 Features
- **User Authentication** (Register, Login, JWT Auth, Password Hashing with bcrypt)
- **Product Management** (CRUD APIs for products, categories, inventory)
- **Cart & Wishlist** (Add/Remove items, quantity updates)
- **Order Management** (Place orders, payment status, shipping address)
- **Database**: MongoDB with Mongoose models
- **Security**: 
  - Hashed passwords
  - Environment variables using `dotenv`
  - CORS & cookie-based session support
- **Scalable Project Structure** (MVC pattern)

---

## 📂 Project Structure
```
ecommerce-backend/
│── src/
│   ├── app.js              # Express app config (middlewares, parsers, cors)
│   ├── server.js           # Server entry point
│   ├── db/
│   │   └── db_connection.js # MongoDB connection
│   ├── models/             # Mongoose schemas (User, Product, Order, etc.)
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic for routes
│   └── utils/              # Utility functions (asyncHandler, jwt, etc.)
│
│── .env                    # Environment variables
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/ecommerce-backend.git
cd ecommerce-backend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create `.env` file
```env
PORT=3000
DB_URL=mongodb://127.0.0.1:27017
DB_NAME=ecommerce
CORS_ORIGIN=http://localhost:5173
JWT_SECRET=your_jwt_secret
JWT_EXPIRY=7d
```

### 4️⃣ Start the development server
```bash
npm run dev
```

---

## 🛠️ Tech Stack
- **Backend Framework**: Node.js + Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT & bcrypt
- **Middleware**: cors, cookie-parser, express.json
- **Environment Management**: dotenv

---

## 📌 Available API Endpoints

### 👤 User Routes
- `POST /api/v1/users/register` – Register new user
- `POST /api/v1/users/login` – Login user
- `GET /api/v1/users/profile` – Get user profile

### 📦 Product Routes
- `GET /api/v1/products` – Get all products
- `POST /api/v1/products` – Create product (Admin)
- `PUT /api/v1/products/:id` – Update product
- `DELETE /api/v1/products/:id` – Delete product

### 🛒 Cart & Wishlist
- `POST /api/v1/cart` – Add item to cart
- `DELETE /api/v1/cart/:id` – Remove item from cart
- `POST /api/v1/wishlist` – Add product to wishlist

### 📑 Orders
- `POST /api/v1/orders` – Place new order
- `GET /api/v1/orders` – Get all orders (user/admin)

---

## 👨‍💻 Contributing
Contributions are welcome!  
Please fork this repo and submit a pull request.

---

## 📜 License
This project is licensed under the **MIT License**.

---
