import {GET_DATA_FAILURE,GET_DATA_LOADING,GET_DATA_SUCCESSFULL} from './actionTypes'

const initialStata = {
    isLoading: false,
    isError: false,
    cartData: []
}
export const reducer = (state = initialStata, { type, payload }) => {
    console.log("cart reducer", state)
    switch (type) {
        // case GET_DATA_LOADING: return ({})
        // case GET_DATA_SUCCESSFULL: return ({})
        // case GET_DATA_FAILURE: return ({})
        default: return state
    }
}