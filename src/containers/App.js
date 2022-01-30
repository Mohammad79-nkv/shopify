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
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from "../components/register/SignIn";
import SignUp from "../components/register/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../reducers/user";
import { initCart } from "../reducers/cart";
import NotFound from './../components/NotFound';

function App() {
  const { pathname } = useLocation();
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    const cartItem = JSON.parse(localStorage.getItem("cart"))
    dispatch(setUser(user))
    if(cartItem){
      dispatch(initCart(cartItem))
    }

  }, [])
  // useEffect(()=>{
  //   // if(localStorage.cart)
  //   localStorage.setItem("cart", JSON.stringify(cart))
  // },[cart])
  return (
    <Container className="App">
    <Header />
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/p/:id" element={<SingleProduct />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Container>
  );
}
const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ffffff; */
`;
export default App;
