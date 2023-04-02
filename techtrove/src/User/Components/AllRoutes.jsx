import React from "react";

import { Route, Routes, useSearchParams } from "react-router-dom";
import { CreateAccount } from "../Pages/CreateAccount";

import Home from "../Pages/Home";
import { Login } from "../Pages/Login";
import Productspage from "../Pages/Productspage";
import Singleproductpage from "../Pages/Singleproductpage";
import Checkout from "../Pages/Checkout";
import { Cart } from "../Pages/Cart";
import AdminPrivate from "../../Admin/AdminComponent/AdminPrivate";
import AdminSideBar from "../../Admin/AdminComponent/AdminSideBar";
import Dashboard from "../../Admin/Pages/Dashboard";
import AdminLogin from "../../Admin/Pages/AdminLogin";
import AdminProfile from "../../Admin/Pages/AdminProfile";
import AdminProduct from "../../Admin/Pages/AdminProduct";
import AdminCreate from "../../Admin/Pages/AdminCreate";


const AllRoutes = () => {
  const [seacrchparams, setSearchparams] = useSearchParams();
  const id = seacrchparams.getAll("id");
  console.log(id);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Productspage />} />
      <Route path="/products/:id" element={<Singleproductpage />} />

      {/* Admin Routes */}

      <Route
        path="/dashboard"
        element={
          <AdminPrivate>
            <AdminSideBar>
              <Dashboard />
            </AdminSideBar>
          </AdminPrivate>
        }
      />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route
        path="/adminprofile"
        element={
          <AdminPrivate>
            <AdminSideBar>
              <AdminProfile />
            </AdminSideBar>
          </AdminPrivate>
        }
      />
      <Route
        path="/adminproduct"
        element={
          <AdminPrivate>
            <AdminSideBar>
              <AdminProduct />
            </AdminSideBar>
          </AdminPrivate>
        }
      />
      <Route
        path="/admincreate"
        element={
          <AdminPrivate>
            <AdminSideBar>
              <AdminCreate />
            </AdminSideBar>
          </AdminPrivate>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
