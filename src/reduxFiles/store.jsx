import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { loadingReducer } from "./loadingReducer";

const rootReducer = combineReducers({
  users: userReducer,
  cart: cartReducer,
  product: productReducer,
  loading:loadingReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
