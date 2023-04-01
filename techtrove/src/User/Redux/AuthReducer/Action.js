import axios from "axios"
import { CREATE_ACCOUNT, LOGIN_FAILURE, LOGIN_SUCCESSFULL } from "./actionTypes"

export const createAccount=(userData)=>(dispatch)=>{
    axios.post(`https://json-server-bestbuy.onrender.com/UserData`,userData)
    .then((res)=>{
        dispatch({type:CREATE_ACCOUNT,payload:res.data})
    })
    .catch((err)=>{})
} 
export const userLogin=(userData)=>(dispatch)=>{
    // console.log(userData)
    // let query=userData.email
    axios.get(`https://json-server-bestbuy.onrender.com/UserData?q=${userData.email}`,)
    .then((res)=>{
        // console.log(res.data)
        dispatch({type:LOGIN_SUCCESSFULL,payload:res.data})
    })
    .catch((err)=>{
        dispatch(LOGIN_FAILURE())
    })
}