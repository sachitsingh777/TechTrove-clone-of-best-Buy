import {CART_DELETE_PRODUCT, CART_FAILURE, CART_GET_PRODUCT, CART_REQUEST, } from './actionTypes'

const initialStata = {
    isLoading: false,
    isError: false,
    cartData: []
}
export const reducer = (state = initialStata, { type, payload }) => {
    console.log("cart reducer", state)
    switch (type) {
        case CART_REQUEST: return { ...state, loading: true }

        case CART_FAILURE: return { ...state, loading: false, error: true }

        case CART_GET_PRODUCT:return { ...state, loading: false, cartData: payload }

       
        
        case CART_DELETE_PRODUCT: {
      
            return { ...state,cartData:state.cartData.filter((item) =>  item.id !== payload.id) }
        }
        default: return state
    }
}