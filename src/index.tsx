import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { CartProvider } from "./context/cart/CartProvider";
import { CounterProvider } from "./context/counter/CounterProvider";
import { SearchProvider } from "./context/search/SearchProvider";
import App from "./App";
import "./index.css";
import { WishlistProvider } from "context/wishlist/WishlistProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <CounterProvider>
        <CartProvider>
          <SearchProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </SearchProvider>
        </CartProvider>
      </CounterProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
