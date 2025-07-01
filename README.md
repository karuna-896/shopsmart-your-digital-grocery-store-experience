# 🛒 ShopSmart: Your Digital Grocery Experience

ShopSmart is a full-stack grocery web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides a smooth and secure platform for users to browse and purchase groceries online, and for admins to manage products, users, and orders through a feature-rich dashboard.

---

## ✨ Features

### 👤 User Features
- 🔐 **Register/Login** with secure JWT authentication
- 🔎 **Search & Filter** products by category, price, or name
- 🛒 **Add to Cart** and update quantities dynamically
- 🧾 **Order Placement** with Cash on Delivery and online payment options
- 📝 **Write & Edit Reviews** for purchased products
- 💖 **Wishlist** favorite products
- 📦 **Track Orders** and view order history
- 🏠 **Manage Address** during checkout

### 🧑‍💼 Admin Features
- 📊 **Admin Dashboard** with real-time insights
- 📦 **Product Management**: Add, edit, and delete products and categories
- 🧑‍💻 **User Management**: View users and assign roles
- 🛍️ **Order Management**: Update order statuses and shipping
- 📈 **Reports**: View analytics for sales and bookings



## ⚙️ Tech Stack

- **Frontend**: React.js, Axios, React Router, CSS
- **Backend**: Node.js, Express.js, JWT, Mongoose
- **Database**: MongoDB (Local or Atlas)
- **Authentication**: JSON Web Tokens (JWT)
- **Other Tools**: Git, VS Code, Cloudinary (optional), Razorpay/Stripe (optional)

---

## 🧰 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Git](https://git-scm.com/)
- A code editor (e.g., [VS Code](https://code.visualstudio.com))

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

bash
git clone <your-repo-url>
cd shopsmart
`

### 2️⃣ Install Backend Dependencies

bash
cd server
npm install


### 3️⃣ Install Frontend Dependencies

bash
cd ../client
npm install


### 4️⃣ Create `.env` file in `/server`

env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/grocery
JWT_SECRET=your_jwt_secret


> Replace values as needed for production use or if deploying online.

### 5️⃣ Run the Project

#### Start Backend

bash
cd server
node index.js


#### Start Frontend

bash
cd ../client
npm start


Now open your browser and go to:


http://localhost:3000


---

## 🔐 Roles & Access Control

* **User**: Can browse, shop, review, and manage their own orders.
* **Admin**: Can manage all products, orders, users, and view reports.

---

## 📌 Project Highlights

* Fully responsive design for all screen sizes
* Modular folder structure for better maintainability
* Role-based route protection using JWT
* Clean UI/UX with dynamic cart and checkout experience
* Integrated product management, order tracking, and authentication

---
