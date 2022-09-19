import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ admin, children }) {
  if (admin != null) {
    if (admin === false) {
      return <Navigate to="/landing" />;
    }
  }
  return children;
}

export default ProtectedRoute;
