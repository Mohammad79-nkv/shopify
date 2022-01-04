
import styled from "styled-components";

import Header from "../components/Header";
import Home from "../components/Home";


function App() {
 

  return (
    <Container className="App">
      <Home/>
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
