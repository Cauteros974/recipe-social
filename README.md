# 🍳 RecipeSocial — Interactive Recipe Platform

RecipeSocial is a modern, full-featured React application designed for food enthusiasts to share recipes, plan shopping, and streamline their cooking process.

## 🌟 Key Features

* **🔍 Smart Search & Filtering:** Instant search by recipe title or ingredients, plus category-based filtering (Breakfast, Lunch, Dinner, etc.).
* **➕ Recipe Builder:** A robust form for creating recipes with real-time image upload previews (using FileReader API) and dynamic fields for ingredients and cooking steps.
* **🛒 Shopping List:** One-click ingredient integration from any recipe into a personal checklist with "mark-as-done" functionality.
* **⏰ Global Cooking Timer:** A persistent timer integrated into the navigation bar that stays active even when browsing different pages.
* **💾 Persistent Storage:** All data (recipes, likes, shopping items) is automatically synced with **LocalStorage**, ensuring no data loss on page refresh.

## 🛠 Tech Stack

* **Core:** React 18
* **Build Tool:** Vite (optimized for lightning-fast development)
* **Routing:** React Router DOM (Seamless SPA experience)
* **State Management:** React Context API (Global data flow)
* **Iconography:** Lucide React
* **Styling:** Clean, responsive CSS-in-JS and Modular UI approach

## 🏗 Architecture & Logic

The project follows a clean, modular structure:

* **`Context API`**: Acts as a lightweight "database" handler, managing global state for recipes, search queries, and the shopping cart.
* **`Custom Hooks`**: Utilization of `useState` and `useEffect` for managing complex form states and persistent storage synchronization.
* **`Dynamic Forms`**: Advanced handling of array-based inputs for a flexible recipe creation experience.

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/social-cook.git](https://github.com/your-username/social-cook.git)


![alt text](https://github.com/Cauteros974/recipe-social/blob/main/public/images/1.png)
![alt text](https://github.com/Cauteros974/recipe-social/blob/main/public/images/2.png)
![alt text](https://github.com/Cauteros974/recipe-social/blob/main/public/images/3.png)
![alt text](https://github.com/Cauteros974/recipe-social/blob/main/public/images/4.png)
![alt text](https://github.com/Cauteros974/recipe-social/blob/main/public/images/5.png)
![alt text](https://github.com/Cauteros974/recipe-social/blob/main/public/images/6.png)
