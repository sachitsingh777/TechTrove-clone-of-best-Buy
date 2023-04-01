import React from "react";
import { Route, Routes } from "react-router-dom";
// import { CreateAccount } from "../Pages/CreateAccount";
import Home from "../Pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/createAccount" element={<CreateAccount />} /> */}
      <Route path="/cart" />
    </Routes>
  );
};

export default AllRoutes;
