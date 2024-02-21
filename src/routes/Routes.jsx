import React from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import LoginPage from "../pages/LoginPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/auth/Login";

const RoutesMain = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
      <Route  path="/checkout" element={<PrivateRoute element={<CheckoutPage />} />} />
      <Route path="/login" element={<PublicRoute element={<Login />} />} />
      
    </Routes>
    </BrowserRouter>
  );
};

export default RoutesMain;
