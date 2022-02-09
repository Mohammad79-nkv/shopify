import styled from "styled-components";

import Header from "../components/Header";
import Home from "../components/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import AllProducts from "../components/AllProducts";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SingleProduct from "./../components/common/SingleProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../reducers/user";
import { initCart } from "../reducers/cart";
import NotFound from "./../components/NotFound";
import { routes } from "../routes/Routes";
import MainLayout from "../layouts/MainLayout";

function App() {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  // scroll to top when page changed
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // get information from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const cartItem = JSON.parse(localStorage.getItem("cart"));
    dispatch(setUser(user));
    if (cartItem) {
      dispatch(initCart(cartItem));
    }
  }, []);
  return (
      <MainLayout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </MainLayout>
  );
}
// const Container = styled.div``;
export default App;
