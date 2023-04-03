
import {CART_DELETE_PRODUCT, CART_FAILURE, CART_GET_PRODUCT, CART_REQUEST, } from './actionTypes'
import axios from 'axios'
export const CARTGetProduct = (dispatch) => {
    dispatch({ type: CART_REQUEST })
     axios.get(`https://beautiful-calf-wear.cyclic.app/AddToCart`)
     .then(res=>dispatch({ type: CART_GET_PRODUCT, payload: res.data }))
    .catch( error=>dispatch({ type:CART_FAILURE }))
         
}


export const CARTDeleteProduct = (id) => (dispatch) => {
    console.log(id)
    axios.delete(`https://beautiful-calf-wear.cyclic.app/AddToCart/${id}`)
      .then((res) => {
        console.log(res.data)
        dispatch({ type: CART_DELETE_PRODUCT, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: CART_FAILURE, payload: error });
      });
  };
