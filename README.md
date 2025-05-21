# 📗 Contact Management System (Backend with Authentication)

This is a backend-only Contact Management System built using **Node.js**, **Express**, and **MongoDB**, with secure user authentication powered by **JWT (JSON Web Tokens)**. It allows users to register, login, and manage their contacts securely.

---

## 🔧 Tech Stack

- **Backend Framework:** Node.js + Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT + Bcrypt
- **Environment:** REST API (Postman-tested)

---

## 🚀 Features

- ✅ User Registration & Login
- ✅ Password hashing with Bcrypt
- ✅ JWT-based Authentication Middleware
- ✅ CRUD operations for Contacts:
  - Add a contact
  - View all user contacts
  - Update a contact
  - Delete a contact
- ✅ Protected Routes (only accessible when logged in)

---

## 📂 Folder Structure

```
├── controllers/
│   ├── authController.js
│   └── contactController.js
├── models/
│   ├── User.js
│   └── Contact.js
├── routes/
│   ├── authRoutes.js
│   └── contactRoutes.js
├── middleware/
│   └── authMiddleware.js
├── .env
├── server.js
└── package.json
```

---

## 🔐 API Authentication

- All contact routes are protected using JWT.
- To access protected routes, include the token in the `Authorization` header:
  ```
  Authorization: Bearer <your_token>
  ```

---

## 📨 Sample API Endpoints

| Method | Endpoint           | Description           |
|--------|--------------------|-----------------------|
| POST   | /api/register      | Register new user     |
| POST   | /api/login         | Login and get token   |
| GET    | /api/contacts      | Get all contacts      |
| POST   | /api/contacts      | Add new contact       |
| PUT    | /api/contacts/:id  | Update a contact      |
| DELETE | /api/contacts/:id  | Delete a contact      |

---

## 🧪 Testing

Use **Postman** to test API endpoints.
Make sure to:
- Register a new user
- Login to receive JWT token
- Use the token to access contact routes

---

## 🛠️ Setup Instructions

1. Clone the repository

   git clone https://github.com/divyam137/backend/
   cd contact-management-backend

2. Install dependencies
   npm install
  

3. Set up your `.env` file
   ```
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server

   nodemon server.js
   

---

## 📌 Status

This project is fully functional as a backend service. Frontend is currently under development or can be integrated separately.

---

## 🤛️ Author

**Divyam Agarwal**

> *Feel free to reach out for collaboration, contributions, or suggestions!*
