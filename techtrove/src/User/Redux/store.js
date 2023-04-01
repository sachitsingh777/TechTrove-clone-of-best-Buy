import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import { reducer as productreducer } from "./productReducer/reducer";
import {reducer as authReducer } from './AuthReducer/reducer'

import thunk from "redux-thunk";
const rootReducer = combineReducers({ 
  productreducer,
  authReducer

 });

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
