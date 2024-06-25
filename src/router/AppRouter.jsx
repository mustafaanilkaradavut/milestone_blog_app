// src/router/AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login"; // Doğru yolu sağladığınızdan emin olun

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Diğer route'lar */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
