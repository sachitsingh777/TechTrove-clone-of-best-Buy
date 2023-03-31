import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import { reducer as productreducer } from "./productReducer/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers(
  { productreducer }
  );

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
