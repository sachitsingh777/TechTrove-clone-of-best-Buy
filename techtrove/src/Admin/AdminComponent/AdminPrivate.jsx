import React from "react";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
 const AdminPrivate=({children})=>{


    const {auth}=useSelector((store)=>store.adminAuthReducer)
    return auth?children:<Navigate to={"/adminlogin"}  />
 }
 export default AdminPrivate