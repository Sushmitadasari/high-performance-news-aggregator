# High Performance News Aggregator

A React 19 + Vite application that demonstrates frontend performance optimization techniques using the Hacker News API.

The project contains two implementations:

- `slow-version` branch → intentionally inefficient implementation
- `main` branch → optimized implementation

---

# Features

- React 19
- Vite
- Hacker News API
- Virtualized Rendering
- Parallel Data Fetching
- Debounced Search
- Lazy Loaded Components
- Bundle Analysis
- Docker Support
- Docker Compose Support

---

# Project Structure

```text
high-performance-news-aggregator/

├── docker-compose.yml
├── Dockerfile
├── .dockerignore
├── .env.example
├── README.md
├── PERFORMANCE.md
├── package.json
├── vite.config.js

├── public/
│   ├── hero.webp
│   ├── hero-small.webp
│   └── hero-large.webp

├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│
│   ├── api/
│   │   └── hackerNews.js
│
│   ├── hooks/
│   │   ├── useNews.js
│   │   └── useDebounce.js
│
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SortButton.jsx
│   │   ├── ArticleItem.jsx
│   │   ├── VirtualizedList.jsx
│   │   ├── StatsPanel.jsx
│   │   └── HeavyInfoPanel.jsx
│
│   └── utils/
│       ├── formatter.js
│       └── constants.js
```

---

# Installation

```bash
npm install
```

---

# Development

```bash
npm run dev
```

Application runs on:

```text
http://localhost:5173
```

---

# Production Build

```bash
npm run build
```

---

# Preview Production Build

```bash
npm run preview
```

---

# Bundle Analysis

Build project:

```bash
npm run build
```

Generated file:

```text
stats.html
```

Open:

```bash
open stats.html
```

or

```bash
start stats.html
```

---

# Docker

Build and start:

```bash
docker-compose up --build
```

Stop:

```bash
docker-compose down
```

---

# Environment Variables

Create:

```bash
cp .env.example .env
```

Variables:

```env
PORT=5173
VITE_HN_API=https://hacker-news.firebaseio.com/v0
```

---

# Slow Branch

Switch to deliberately slow implementation:

```bash
git checkout slow-version
```

---

# Optimized Branch

Switch back:

```bash
git checkout main
```

---

# Performance Improvements

## Parallel Fetching

Before:

```js
for (...) {
 await fetch(...)
}
```

After:

```js
Promise.all(...)
```

Benefits:

- Removes network waterfall
- Reduces load time dramatically
- Better API utilization

---

## Virtualization

Before:

```jsx
stories.map(...)
```

After:

```jsx
useVirtualizer(...)
```

Benefits:

- Renders fewer than 50 DOM nodes
- Lower memory usage
- Faster scrolling

---

## Memoization

Before:

```jsx
ArticleItem
```

After:

```jsx
React.memo(ArticleItem)
```

Benefits:

- Avoids unnecessary re-renders
- Improves UI responsiveness

---

## Lazy Loading

Before:

```jsx
import HeavyInfoPanel
```

After:

```jsx
React.lazy(...)
```

Benefits:

- Smaller initial bundle
- Faster first paint

---

## Bundle Splitting

Benefits:

- Multiple JavaScript chunks
- Better browser caching
- Faster startup

---

## Image Optimization

Benefits:

- Reduced download size
- Responsive images
- Better LCP score

---

# Tech Stack

- React 19
- Vite
- JavaScript
- Docker
- Docker Compose
- Hacker News API
- @tanstack/react-virtual
- lodash
- rollup-plugin-visualizer
