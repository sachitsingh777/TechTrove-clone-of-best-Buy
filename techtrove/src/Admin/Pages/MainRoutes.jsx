import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from './Dashboard'
import AdminLogin from "./AdminLogin"
import AdminProfile from "./AdminProfile"
import AdminCreate from "./AdminCreate"
import AdminCreate from "./AdminCreate"
const MainRoutes = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<Dashboard/>}/>
   <Route path="/adminlogin" element={<AdminLogin/>}/>
   <Route path="/adminprofile" element={<AdminProfile/>}/>
   <Route path="/adminproduct" element={<AdminProduct/>} />
   <Route path="/admincreate" element={<AdminCreate/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default MainRoutes