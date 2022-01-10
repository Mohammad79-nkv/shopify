import { combineReducers } from "redux";
import cartReducer from "./cart";
import productsReducer from "./product";
import singleProductReducer from "./singleProduct";

const reducers = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer
});

export default reducers;
