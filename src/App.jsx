import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/productsPage/Products";
import ShoppingCart from "./pages/shoppingCartPage/ShoppingCart";

const App = () => {
  return (
    <div className="App">
      {/* configure routes */}
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
};

export default App;
