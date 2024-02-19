import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  console.log("🚀 ~ PrivateRoute ~ isAuthenticated:", isAuthenticated)
  return isAuthenticated ? (
    // <Routes>

    element
    // </Routes>
  ) : (
    <Navigate to={"/login"} replace />
  );
};

export default PrivateRoute;
