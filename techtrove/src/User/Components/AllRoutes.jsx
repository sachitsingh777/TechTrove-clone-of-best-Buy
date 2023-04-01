import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateAccount } from "../Pages/CreateAccount";
import Home from "../Pages/Home";
import { Login } from "../Pages/Login";
import Productspage from "../Pages/Productspage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Productspage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createaccount" element={<CreateAccount />}/>
      <Route />
      <Route/>
      <Route path="/cart" />
    </Routes>
  );
};

export default AllRoutes;
