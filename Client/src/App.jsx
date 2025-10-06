// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import ProductGrid from "./Pages/ProductGrid/ProductGrid";
import MyCart from "./Pages/MyCart/MyCart";
import CartContextProvider from "./Utilities/Context/CartContextProvider";

function App() {
  return (
    <CartContextProvider> //contextprovider wrapping components to pass as children
      <Router>
        <Navbar />
        <Routes>
          //Routes
          <Route path="/" element={<ProductGrid />} />
          <Route path="/mycart" element={<MyCart />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
