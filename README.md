# 📚 Book Reader Backend API

This is the backend for a Book Reader App where users can **purchase or rent books** securely using **OAuth 2.0** authentication via **Auth0**. Built with **Node.js**, **Express**, **PostgreSQL**, and **Prisma ORM**.

---

## 🚀 Features

- 🔐 OAuth 2.0 Authentication with Auth0
- 🧾 Users can purchase or rent books
- 🛡 Secure API routes using JWT
- 📦 PostgreSQL database with Prisma ORM
- 🧑‍💻 Built using Express.js and Node.js

---

## 🛠 Tech Stack

- **Node.js** + **Express.js** – Web server and routing
- **Auth0** – OAuth 2.0 Identity Provider
- **PostgreSQL** – Relational database
- **Prisma ORM** – Type-safe database client
- **JWT** – Token-based route protection

---

## 📁 Project Structure

book-reader-backend/
├── src/
│ ├── auth/ # Auth0 login, callback, me
│ ├── middleware/ # JWT validation
│ ├── routes/ # API endpoints (books, orders)
│ ├── controllers/ # Business logic
│ └── index.js # Main app entry
├── prisma/ # Prisma schema and migrations
├── .env # Environment variables
└── README.md


---

## 🔧 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/book-reader-backend.git
cd book-reader-backend
```
### 2. Install dependencies
```bash
npm install
```
### 3. Setup your environment
Create a .env file in the root:

PORT=3000

# PostgreSQL DB
DATABASE_URL=postgresql://your_user:your_password@localhost:5432/bookreader

# Auth0 Credentials
AUTH0_DOMAIN=your-tenant.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
AUTH0_AUDIENCE=your-api-identifier

4. Setup your database

npx prisma migrate dev --name init
npx prisma generate

🧪 Running the App

npm run dev

🔐 Auth Flow (OAuth 2.0)
Visit /auth/login to redirect to Auth0
Auth0 redirects to /auth/callback with code
Backend exchanges code for access + ID tokens
Use access_token to access protected routes


🧵 API Endpoints
Auth Routes
Method	Endpoint	Description
GET	    /auth/login	Redirect to Auth0 login
GET	    /auth/callback	OAuth callback from Auth0
GET	    /auth/me	Return current logged-in user

Book Routes
Method	Endpoint	Description
GET	    /books	Get all books
POST	/order	Purchase or rent a book 🔒

