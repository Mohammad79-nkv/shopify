import styled from "styled-components";

import Header from "../components/Header";
import Home from "../components/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import AllProducts from "../components/AllProducts";

function App() {
  return (
    <Container className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart/>}/>
        <Route path="products" element={<AllProducts />}/>
      </Routes>
      <Footer />

    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ffffff;
`;
export default App;
