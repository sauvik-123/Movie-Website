# 🎬 Movie Explorer Web App

<p align="center">
  <b>Discover. Search. Favorite. Enjoy.</b>
</p>

<p align="center">
  A fully responsive movie browsing application built with <strong>React</strong>.<br/>
  It integrates with an external movie API to fetch and display real-time movie data,
  allowing users to search and manage a personalized favorites list.
</p>

<p align="center">
  🌍 <strong>Live Demo:</strong><br/>
  👉 <a href="https://movie-website-lake-ten.vercel.app/" target="_blank">
  https://sauvik-123.github.io/Movie-Website/
  </a>
</p>

---

## 🚀 Features

✨ Designed for performance, usability, and clean architecture.

- 🔍 **API-Based Movie Search**
- ❤️ **Add & Remove Favorites**
- 🌐 **Fetch Popular Movies on Initial Load**
- 📱 **Fully Responsive Design (Mobile, Tablet, Desktop)**
- 🧠 **Global State Management using Context API**
- ⚡ **Smooth & Interactive UI Experience**

---

## 🛠 Tech Stack

| Technology          | Purpose                             |
|---------------------|-------------------------------------|
| ⚛️ **React**        | Frontend UI Library                 |
| 🪝 **React Hooks**  | State & Lifecycle Management        |
| 🌍 **Context API**  | Global Favorites State              |
| 🎨 **Tailwind CSS** | Styling & Responsive Layout         |
| 🎬 **TMDB API**     | Movie Data Source                   |
| 🎯 **React Icons**  | UI Icons                            |

---

## 📁 Folder Structure

```bash
Movie-Website/
│
├── public/
│   ├── favicon.ico
│   └── space_Image.jpg
│
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   └── MovieContext.jsx
│   │
│   ├── pages/
│   │   ├── FavoritePage.jsx
│   │   ├── HomePage.jsx
│   │   └── PageNotFound.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
