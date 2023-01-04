import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import ToggleColorMode from "components/ToggleColorMode";
import { HashRouter } from "react-router-dom";
import { CartProvider } from "./context/cart/CartProvider";
import { SearchProvider } from "./context/search/SearchProvider";
import { WishlistProvider } from "context/wishlist/WishlistProvider";
import { LanguageProvider } from "context/language/LanguageProvider";
import App from "./App";
import "./i18n";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ToggleColorMode>
      <LanguageProvider>
        <HashRouter>
          <CartProvider>
            <SearchProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </SearchProvider>
          </CartProvider>
        </HashRouter>
      </LanguageProvider>
    </ToggleColorMode>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
