import React from 'react'
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute = ({element,...rest}) => {
    const {isAuthenticated} = useAuth();
    // debugger
    console.log("🚀 ~ PublicRoute ~ isAuthenticated:", isAuthenticated)
  return isAuthenticated ? (
    <Navigate to="/" replace />
  ):(
    element
  )
}

export default PublicRoute