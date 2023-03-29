import * as types from "./action.types";
import axios from "axios";
export const getData = async (dispatch) => {
  dispatch({ type: types.REQUEST_SUCCESS });
  //https://dead-earrings-tick.cyclic.app/products?_sort=${sort}&_order=${order}
  try {
    let result = await axios.get(
      `https://json-server-bestbuy.onrender.com/products`
    );
    // let result = await axios.get(`https://dead-earrings-tick.cyclic.app/products?_sort=price&_order=desc`);
    dispatch({ type: types.GET_PRODUCT_REQUEST, payload: result.data });
    return result.data;
  } catch (error) {
    dispatch({ type: types.REQUEST_ERROR, payload: error.message });
  }
};
