import { configureStore, compose, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./../reducers/reducers";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), devToolsEnhancer())
);

export default store;
