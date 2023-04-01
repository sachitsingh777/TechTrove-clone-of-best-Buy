

import * as types from "./action.types";
import axios from "axios";
// import { MdOutlineEmojiObjects } from "react-icons/md";
export const getData = (obj, sort, reset, page) => async (dispatch) => {
  console.log(sort);
  dispatch({ type: types.GET_PRODUCT_REQUEST });
  //https://dead-earrings-tick.cyclic.app/products?_sort=${sort}&_order=${order}
  try {
    let result = await axios.get(
      //_sort=views&_order=asc
      `https://json-server-bestbuy.onrender.com/products?_page=${page}&_limit=5&${reset}sort=price&_order=${sort}`,
      obj
    );
    // console.log("sapnadata", result);
    // let result = await axios.get(`https://dead-earrings-tick.cyclic.app/products?_sort=price&_order=desc`);
    dispatch({ type: types.REQUEST_SUCCESS, payload: result.data });
    // return result.data;
  } catch (error) {
    dispatch({ type: types.REQUEST_ERROR, payload: error.message });
  }
};

