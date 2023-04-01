import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontypes"

export const Adminlogin=(userData)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
 return   axios.post('https://reqres.in/api/login',userData)
    .then((res)=>{
        console.log(res)
        dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
    })
    .catch((error)=>dispatch({type:LOGIN_FAILURE}))
}