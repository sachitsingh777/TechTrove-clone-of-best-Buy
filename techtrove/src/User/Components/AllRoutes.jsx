import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Productspage from "../Pages/Productspage";
import Singleproductpage from "../Pages/Singleproductpage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" />
      <Route path="/products" element={<Productspage />} />
      <Route path="/id=id" element={<Singleproductpage />} />
    </Routes>
  );
};

export default AllRoutes;
