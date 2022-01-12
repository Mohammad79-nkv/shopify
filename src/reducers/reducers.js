import { combineReducers } from "redux";
import cartReducer from "./cart";
import productsReducer from "./product";
import productLoader from "./productLoaded";
import singleProductReducer from "./singleProduct";

const reducers = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  productLoader
});

export default reducers;
