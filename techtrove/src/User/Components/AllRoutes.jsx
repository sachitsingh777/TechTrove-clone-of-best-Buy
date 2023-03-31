import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Productspage from "../Pages/Productspage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Productspage />} />

      <Route path="/cart" />
    </Routes>
  );
};

export default AllRoutes;
