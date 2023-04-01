import React from 'react'
import { Route, Routes} from "react-router-dom"
import Dashboard from './Dashboard'
import AdminLogin from "./AdminLogin"
import AdminProfile from "./AdminProfile"
import AdminCreate from "./AdminCreate"
import AdminProduct from "./AdminProduct"
import AdminSideBar from '../AdminComponent/AdminSideBar'
const MainRoutes = () => {
  return (
    <>
    
    <Routes>
   <Route path="/dashboard" element={
    <AdminSideBar>
   <Dashboard/></AdminSideBar>
   }/>
   <Route path="/adminlogin" element={<AdminLogin/>}/>
   <Route path="/adminprofile" element={
    <AdminSideBar>
   <AdminProfile/></AdminSideBar>
   }/>
   <Route path="/adminproduct" element={
    <AdminSideBar>
   <AdminProduct/></AdminSideBar>
   } />
   <Route path="/admincreate" element={
    <AdminSideBar>
   <AdminCreate/></AdminSideBar>
   }/>
    </Routes>
    
  </>
  )
}

export default MainRoutes