import * as types from "./action.types";
const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCT_REQUEST: {
      return { ...state, isLoading: false, products: payload };
    }
    case types.REQUEST_SUCCESS: {
      return { isLoading: true, isError: false };
    }
    case types.REQUEST_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
