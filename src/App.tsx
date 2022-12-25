import { Routes, Route } from "react-router-dom";
import { HomePage, ExamplePage, NotFoundPage, CartPage, Details, Checkout } from "pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/example" element={<ExamplePage />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
