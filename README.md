# 📰 NewsExplorer – Frontend

NewsExplorer is a responsive React-based frontend app that allows users to search for the latest news on any topic and save them in their personal account. It uses an intuitive UI, clean component structure, and integrates with a backend API to fetch real news content.

---

## 🚀 Features

- Topic-based news search
- Clean and responsive UI
- User authentication (Sign up / Sign in)
- Save and manage favorite articles
- Mobile-friendly layout

---

## ⚙️ Tech Stack

- **Frontend:** React, JSX, CSS (BEM), Vite
- **Routing:** React Router
- **State:** useState, useEffect, Context API
- **API:** News API (via custom `fetchNews` util)
- **Fonts:** Inter + Roboto Slab (local `.woff` and `.woff2`)

---

## 🖼️ Folder Structure

```
📦 src
 ┣ 📂 components
 ┃ ┣ 📂 Header
 ┃ ┣ 📂 Main
 ┃ ┣ 📂 SearchBar
 ┃ ┣ 📂 NewsCard
 ┃ ┗ 📂 Footer
 ┣ 📂 images
 ┣ 📂 fonts
 ┣ 📜 App.jsx
 ┣ 📜 index.jsx
 ┗ 📜 index.css
```

---

## 🛠️ Setup & Run Locally

1. **Clone the repo**
   ```
   git clone https://github.com/dancarlton/news-explorer-frontend.git
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Start the dev server**
   ```
   npm run dev
   ```

---

## 🔑 Environment Variables

If the app uses a backend or third-party API, create a `.env` file:

```
VITE_NEWS_API_KEY=your_api_key_here
```

---

## 📦 Deployment

This app is deployable via GitHub Pages, Netlify, or Vercel. For GitHub Pages via Vite:

```
npm run build
npm run deploy
```

---

## 🧠 Learnings

- Practiced BEM methodology for scalable CSS
- Used controlled components with React forms
- Implemented Flexbox and media queries for layout control
- Managed font loading with local `.woff/.woff2` files

---

## 🙌 Acknowledgements

- [News API](https://newsapi.org)
- [TripleTen Bootcamp](https://tripleten.com)
- [Google Fonts](https://fonts.google.com/)
