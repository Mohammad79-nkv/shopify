import styled from "styled-components";
import BrandSlick from "./BrandSlick";
import MainSlick from "./mainSlick";
import Products from "./Products";
import AllProducts from './AllProducts';


const Home = () => {
  return (
    <>
      <MainSlick />
      <BrandSlick />
      <AllProducts/>
    </>
  );
};



export default Home;
