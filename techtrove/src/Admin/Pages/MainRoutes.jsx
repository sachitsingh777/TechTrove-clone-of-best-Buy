import React from 'react'
import { Route, Routes} from "react-router-dom"
import Dashboard from './Dashboard'
import AdminLogin from "./AdminLogin"
import AdminProfile from "./AdminProfile"
import AdminCreate from "./AdminCreate"
import AdminProduct from "./AdminProduct"
import AdminHome from "../Admin/AdminHome"
const MainRoutes = () => {
  return (
    <>
    
    <Routes>
   <Route path="/dashboard" element={<AdminHome/>}/>
   <Route path="/adminlogin" element={<AdminLogin/>}/>
   <Route path="/adminprofile" element={<AdminProfile/>}/>
   <Route path="/adminproduct" element={<AdminProduct/>} />
   <Route path="/admincreate" element={<AdminCreate/>}/>
    </Routes>
    
  </>
  )
}

export default MainRoutes