import axios from "axios"
import { CREATE_ACCOUNT, LOGIN_FAILURE, LOGIN_SUCCESSFULL } from "./actionTypes"

export const createAccount=(userData)=>(dispatch)=>{
    console.log(userData)
    axios.post(``,userData)
    .then((res)=>{
        dispatch(CREATE_ACCOUNT())
    })
    .catch((err)=>{})
}
export const userLogin=(userData)=>(dispatch)=>{
    axios.post(``,userData)
    .then((res)=>{
        dispatch(LOGIN_SUCCESSFULL(res.data))
    })
    .catch((err)=>{
        dispatch(LOGIN_FAILURE())
    })
}