import styled from "styled-components";
import BrandSlick from "./BrandSlick";
import Header from "./Header";
import MainSlick from "./mainSlick";
import Products from "./Products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./../reducers/product";
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <MainSlick />
      <BrandSlick />
      <Products />
    </>
  );
};



export default Home;
