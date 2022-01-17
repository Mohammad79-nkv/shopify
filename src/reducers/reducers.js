import { combineReducers } from "redux";
import cartReducer from "./cart";
import productsReducer from "./product";
import productLoader from "./productLoaded";
import singleProductReducer from "./singleProduct";
import userReducer from "./user";

const reducers = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  productLoader,
  user: userReducer
});

export default reducers;
