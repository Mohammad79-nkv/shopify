import styled from "styled-components";

import Header from "../components/Header";
import Home from "../components/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";

function App() {
  return (
    <Container className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart/>}/>
      </Routes>
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
