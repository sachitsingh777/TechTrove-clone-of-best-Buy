import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import AdminReducer from "../../Admin/AdminRedux/AdminReducer"
import { reducer as adminAuthReducer } from "../../Admin/AdminRedux/AdminAuthReducer/reducer";
import { reducer as productreducer } from "./productReducer/reducer";
import {reducer as authReducer } from './AuthReducer/reducer'

import thunk from "redux-thunk";

const rootReducer = combineReducers(
  { productreducer ,AdminReducer,adminAuthReducer,authReducer}
  );


export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
