
import styled from "styled-components";

import Header from "./components/Header";


function App() {
 

  return (
    <Container className="App">
      <Header />
      
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
