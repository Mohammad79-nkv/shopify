import Lottie from "lottie-react-web";
import { useState } from "react";
import styled from "styled-components";
import plus from "../../assets/icons/49-plus-circle-outline-edited.json";
import minus from "../../assets/icons/50-minus-circle-outline-edited.json";
import trash from "../../assets/icons/185-trash-bin-outline-edited.json";

const CartProduct = (props) => {
  const {image, title , price} = props;
  const [increment, setIncrement] = useState(false);
  const [decrement, setDecrement] = useState(false);
  const [remove, setRemove] = useState(false);
  return (
    <Container>
      <Content>
        <ProductImg>
          <img src={image} />
        </ProductImg>
        <ProductInfo>
          <h5>{title.split(" ").slice(0,3).join(" ")}</h5>
          <p>{price} $</p>
        </ProductInfo>
        <ProductCount>
          <div onClick={() => setIncrement(!increment)}>
            <Lottie
              direction={increment ? 1 : -1}
              options={{
                animationData: plus,
                loop: false,
                autoplay: false,
              }}
            />
          </div>
          <span>0</span>
          <div onClick={() => setDecrement(!decrement)}>
            <Lottie
              direction={decrement ? 1 : -1}
              options={{
                animationData: minus,
                loop: false,
                autoplay: false,
              }}
            />
          </div>
        </ProductCount>
        <DeleteProduct>
          <div onClick={() => setRemove(!remove)}>
            <Lottie
              direction={remove ? 1 : -1}
              options={{
                animationData: trash,
                loop: false,
                autoplay: false,
              }}
            />
          </div>
        </DeleteProduct>
      </Content>
      
    </Container>
  );
};
const Container = styled.div`
  /* border-bottom: 1px solid rgba(54, 54, 113, 0.3); */
  padding:10px;
`;
const Content = styled.div`
  /* background-color: rgba(235, 146, 123, 0.2); */
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover{
    box-shadow: 0px 0px 12px -1px rgba(54, 54, 113, 0.5);
    /* border:1px solid rgba(54, 54, 113, 0.5); */
  }
`;
const ProductImg = styled.div`
  img {
    width: 90px;
    height: 90px;
    width: 100%;
    object-fit: contain;
  }
`;
const ProductInfo = styled.div`
  color: #363671;
  h5 {
    font-weight: bold;
  }
`;
const ProductCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    width: 38px;
  }
  span {
    color: #363671;
  }
`;
const DeleteProduct = styled.div`
  width: 48px;
`;


export default CartProduct;
