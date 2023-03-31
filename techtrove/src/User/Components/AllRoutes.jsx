import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Productspage from "../Pages/Productspage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" />
      <Route path="/products" element={<Productspage />} />
    </Routes>
  );
};

export default AllRoutes;
