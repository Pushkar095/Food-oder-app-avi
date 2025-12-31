# Gourmet Go - Food Ordering Application

Gourmet Go is a modern, responsive, and interactive front-end food ordering application built with vanilla HTML, CSS, and JavaScript. It features a premium dark-themed design with glassmorphism effects, a smooth user experience, and local storage-based state management for the cart and user authentication.

## 🚀 Features

*   **Responsive Design:** Fully responsive layout that adapts to Mobile, Tablet, and Desktop screens.
*   **Modern UI:** Dark theme, glassmorphism elements, gradient text, and smooth animations (including a typewriter effect in the hero section).
*   **Menu & Categories:** Dynamic menu rendering with category filtering (Pizza, Burger, Sushi, etc.).
*   **Shopping Cart:**
    *   Add/Remove items.
    *   Real-time total calculation.
    *   Cart persistence using `localStorage` (cart items remain after refresh).
    *   Slide-out sidebar cart interface.
*   **Wishlist:** interactive heart icon on food cards to toggle items as favorites.
*   **Authentication (Simulation):**
    *   Login & Sign Up functionality using `localStorage` to simulate a backend.
    *   Form validation (Email/Mobile format, Password strength).
    *   User profile display in the navigation bar after login.
*   **Search Bar:** Integrated search bar in the navigation (UI).
*   **Additional Pages:** Included About, Contact, FAQ, Terms, Privacy Policy, and Shipping Policy pages.

## 🛠️ Technology Stack

*   **HTML5:** Semantic structure for accessibility and SEO.
*   **CSS3:** Custom styles, Flexbox & Grid layouts, CSS Variables, Animations, and Media Queries.
    *   *Note: No external CSS frameworks were used (Pure CSS).*
*   **JavaScript (ES6+):** DOM manipulation, Event handling, LocalStorage integration, and Logic.
*   **Font Awesome:** For icons throughout the application.
*   **Google Fonts:** Using the 'Outfit' font family for modern typography.

## 📂 Project Structure

```text
/food-ordering-app
│
├── index.html          # Main landing page (Home)
├── auth.html           # Authentication page (Login/Signup)
├── about.html          # About Us page
├── contact.html        # Contact page
├── faq.html            # Frequently Asked Questions
├── terms.html          # Terms of Service
├── privacy.html        # Privacy Policy
├── shipping.html       # Shipping Policy
│
├── styles.css          # Main stylesheet for the application
├── footer.css          # Specific styles for the footer component
│
├── script.js           # Core application logic (Menu, Cart, UI interactions)
├── auth.js             # Authentication-specific logic (Form handling, Validation)
│
└── images/             # Directory for food images and assets
```

## 🖥️ How to Run

1.  **Clone or Download** the project repository.
2.  Open the project folder in your code editor (e.g., VS Code).
3.  **Launch:**
    *   Simply double-click `index.html` to open it in your web browser.
    *   **Or (Recommended):** Use a local development server (like "Live Server" extension in VS Code) for the best experience.

## 🔑 User Authentication Flow

Since the app uses `localStorage` for data persistence:
1.  Go to the **Login** page.
2.  Switch to the **Sign Up** tab.
3.  Create an account (data is saved locally in your browser).
4.  Log in with your new credentials to access the full checkout experience.

## 🔮 Future Improvements

*   **Backend Integration:** Connect to a real Node.js/Python backend for database management.
*   **Payment Gateway:** Integrate Stripe or PayPal for real transactions.
*   **Search Functionality:** Implement real-time filtering for the search bar.
*   **User Dashboard:** Create a dedicated profile page to view order history.

---
*Developed by Avinash Kumar.*
