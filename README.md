# 🗞️ News Explorer – Frontend

**News Explorer** is a responsive React application that allows users to search for news articles by keyword using the [News API](https://newsapi.org/) and save them to their personal profile. This is the **frontend repo** of the full-stack application.

---

## 🌐 Live Demo

_Link coming soon_

---

## 🚀 Features

- Keyword-based news search (last 7 days)
- Responsive card layout for displaying articles
- User authentication: sign in, sign up, sign out
- Protected route for saved articles
- Persistent login using JWT
- Clean, accessible UI based on provided Figma design
- Reusable components styled with BEM methodology

---

## 🧰 Tech Stack

- **Frontend:** React, JavaScript, JSX, CSS (BEM)
- **State Management:** useState, useEffect, Context API
- **Routing:** React Router
- **API:** [NewsAPI.org](https://newsapi.org/) (third-party), Custom Auth API (backend)

---

## 📦 Installation

Clone the frontend repo:

```
git clone https://github.com/dancarlton/news-explorer-frontend.git
cd news-explorer-frontend
npm install
```
---

## 🧪 Running Locally

Start the development server:

```
npm start
```

Make sure the backend is also running locally or deployed.
Update `.env` to point to your backend URL.

---

## 🛠️ Project Structure

```
/src
  /components       → Reusable UI components (Header, Footer, ArticleCard, etc.)
  /contexts         → Contexts for global state (e.g. CurrentUserContext)
  /assets           → Static assets
  /pages            → Main views (Main, SavedNews, Login, Register)
  /utils            → Utility functions (e.g. API helpers, validation)
  App.js            → Main routing logic
  index.js          → Entry point
```

---

## 🤝 Backend Repo

The backend for this app is located here:
[news-explorer-backend](https://github.com/dancarlton/news-explorer-backend)

---

## 📄 License

This project is for educational purposes as part of the TripleTen bootcamp.
Feel free to fork and expand on it!

---
