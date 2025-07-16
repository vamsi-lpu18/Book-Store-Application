# Book Store Application

<p align="center">
  <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" alt="Book Store Banner" width="80%"/>
</p>

<p align="center">
  <b>Book Store Application</b> <br/>
  <i>by ICME Private Limited (Demo Project)</i>
</p>

<p align="center">
  <a href="https://book-store-application-5-v39i.onrender.com"><img src="https://img.shields.io/badge/Live%20Demo-Online-brightgreen?style=for-the-badge&logo=vercel" alt="Live Demo"/></a>
  <a href="https://github.com/vamsi-lpu18/Book-Store-Application"><img src="https://img.shields.io/github/stars/vamsi-lpu18/Book-Store-Application?style=for-the-badge" alt="GitHub stars"/></a>
  <img src="https://img.shields.io/badge/License-Demo%20Only-blue?style=for-the-badge" alt="License"/>
</p>

---

## 🚀 Live Demo

- **Frontend:** [https://book-store-application-5-v39i.onrender.com](https://book-store-application-5-v39i.onrender.com)
- **Backend:** [https://book-store-application-4-nvzh.onrender.com](https://book-store-application-4-nvzh.onrender.com)

---

## 🏢 About ICME Private Limited (Dummy Company)

ICME Private Limited is a fictional company for demonstration purposes. This Book Store Application is designed as a sample project for their online learning and book sales platform.

---

## ✨ Features

- User Signup & Login (with password hashing)
- Browse all books/courses
- Search functionality (by name/title)
- Filter and view free courses
- Responsive, modern UI with Tailwind CSS & DaisyUI
- Dark mode support
- Add, seed, and manage books in MongoDB Atlas
- Deployed backend and frontend

---

## 🖼️ Screenshots

<p align="center">
  <img src="https://user-images.githubusercontent.com/674621/146646964-603b5c2b-6b7a-4b2a-8e7b-2b6e6e6b8b8b.png" alt="Home Page" width="80%"/>
  <br/>
  <i>Home Page with Banner and Free Courses</i>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/674621/146647001-2b1e2e2a-7c2e-4e2a-8b2e-2b6e6e6b8b8b.png" alt="Courses Page" width="80%"/>
  <br/>
  <i>Courses Page with Search Functionality</i>
</p>

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, DaisyUI, Axios
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB Atlas
- **Deployment:** Render.com (both frontend and backend)

---

## 📦 Project Structure

```
Book-Store-Application/
├── Backend/
│   ├── controller/
│   ├── model/
│   ├── route/
│   ├── seedBooks.js
│   ├── index.js
│   └── ...
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── home/
│   │   ├── courses/
│   │   └── ...
│   ├── public/
│   ├── index.html
│   └── ...
└── README.md
```

---

## ⚙️ Local Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/vamsi-lpu18/Book-Store-Application.git
cd Book-Store-Application
```

### 2. Setup Backend
```sh
cd Backend
npm install
# Create a .env file with your MongoDB Atlas URI
# Example .env:
# MONGODB_URI=your-mongodb-atlas-uri
node seedBooks.js   # (Optional) Seed the database with sample books
npm start           # Start the backend server
```

### 3. Setup Frontend
```sh
cd ../Frontend
npm install
# Create a .env file with your backend API URL
# Example .env:
# VITE_API_URL=https://book-store-application-4-nvzh.onrender.com
npm run dev         # Start the frontend (development)
```

---

## 🌐 Deployment

- **Backend:** Deployed on Render as a web service.
- **Frontend:** Deployed on Render as a static site.
- **Environment Variables:**
  - Backend: `MONGODB_URI` (MongoDB Atlas connection string)
  - Frontend: `VITE_API_URL` (deployed backend URL)

---

## 📚 Usage
- Visit the [live frontend](https://book-store-application-5-v39i.onrender.com)
- Sign up or log in
- Browse and search for books/courses
- Explore free courses on the homepage

---

## 🤝 Credits

- Developed for ICME Private Limited (dummy company)
- Built by [Your Name]

---

## 📝 License

This project is for educational/demo purposes only.
