import { async } from 'q'
import {GET_DATA_FAILURE,GET_DATA_LOADING,GET_DATA_SUCCESSFULL} from './actionTypes'
import axios from 'axios'
export const getCartData=async()=>{
    // dispatch({type:GET_DATA_LOADING})
    return axios.get(`https://json-server-bestbuy.onrender.com/AddToCart`)
    // .then((res)=>{
    //     dispatch({type:GET_DATA_SUCCESSFULL,payload:res.data})
    // })
    // .catch((err)=>{
    //     dispatch({type:GET_DATA_FAILURE})
    // })
}

