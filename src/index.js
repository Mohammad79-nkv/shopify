import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'react-toastify/dist/ReactToastify.min.css';

import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { getCategories, getProducts } from './reducers/product';

  store.dispatch(getProducts())
  store.dispatch(getCategories());



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
