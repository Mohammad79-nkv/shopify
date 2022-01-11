import Lottie from "lottie-react-web";
import { useState } from "react";
import styled from "styled-components";
import plus from "../../assets/icons/49-plus-circle-outline-edited.json";
import minus from "../../assets/icons/50-minus-circle-outline-edited.json";
import trash from "../../assets/icons/185-trash-bin-outline-edited.json";
import { handleCountAction } from "../../reducers/cart";
import { useSelector } from "react-redux";

const CartProduct = (props) => {
  const { image, title, price, id } = props;
  const [increment, setIncrement] = useState(false);
  const [decrement, setDecrement] = useState(false);
  const [remove, setRemove] = useState(false);
  const allCartItems = useSelector(state => state.cart)
  const cartItemCount = allCartItems.find((i) => i.id === id).count;

  const handleCountAction = (id, e) => {
    console.log("hello")
    console.log("2")
    const cartItems = [...allCartItems]
    const cartItem = cartItems.find((p) => p.id === id)
    const countAction = e.currentTarget.dataset.count;
    if (countAction === "increment"){
        cartItem.count += 1;
    }else if (countAction === "decrement"){
        if ( cartItem.count > 1){
            cartItem.count -= 1
        }
    }
    // console.log(cartItem)
    // return (dispatch, getState) => {
    // }
    console.log(allCartItems)
}

  const handeCount = (e) => {
    const countAction = e.currentTarget.dataset.count;
    console.log(countAction);
    if (countAction === "increment") {
      setIncrement(!increment);
    } else if (countAction === "decrement") {
      setDecrement(!decrement);
    }
    handleCountAction(id, e);
  };
  return (
    <Container>
      <Content>
        <ProductImg>
          <img src={image} />
        </ProductImg>
        <ProductInfo>
          <h5>{title.split(" ").slice(0, 3).join(" ")}</h5>
          <p>{price} $</p>
        </ProductInfo>
        <ProductCount>
          <div data-count="increment" onClick={(e) => handeCount(e)}>
            <Lottie
              direction={increment ? 1 : -1}
              options={{
                animationData: plus,
                loop: false,
                autoplay: false,
              }}
            />
          </div>
          <span>{cartItemCount}</span>
          <div
            data-count="decrement"
            className="a"
            onClick={(e) => handeCount(e)}
          >
            <div>
              <Lottie
                direction={decrement ? 1 : -1}
                options={{
                  animationData: minus,
                  loop: false,
                  autoplay: false,
                }}
              />
            </div>
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
  padding: 10px;
`;
const Content = styled.div`
  /* background-color: rgba(235, 146, 123, 0.2); */
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
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
