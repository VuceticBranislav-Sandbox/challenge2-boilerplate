import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cart/CartProvider";
// this is example provider
import { CounterProvider } from "./context/counter/CounterProvider";
import { SearchProvider } from "./context/search/SearchProvider";
import { HomePage, ExamplePage, NotFoundPage, CartPage, Details } from "pages";

function App() {
  return (
    <CounterProvider>  
      <CartProvider>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/example" element={<ExamplePage />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SearchProvider>
      </CartProvider>
    </CounterProvider>
  );
}

export default App;
