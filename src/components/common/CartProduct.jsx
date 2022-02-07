import Lottie from "lottie-react-web";
import { useState } from "react";
import styled from "styled-components";
import plus from "../../assets/icons/49-plus-circle-outline-edited.json";
import minus from "../../assets/icons/50-minus-circle-outline-edited.json";
import trash from "../../assets/icons/185-trash-bin-outline-edited.json";
import { handleCountAction } from "../../reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteItem } from "./../../reducers/cart";

const CartProduct = (props) => {
  const dispatch = useDispatch();
  const { image, title, price, id } = props;
  const [increment, setIncrement] = useState(false);
  const [decrement, setDecrement] = useState(false);
  const [remove, setRemove] = useState(false);
  const allCartItems = useSelector((state) => state.cart);
  const cartItemCount = allCartItems.find((i) => i.id === id).count;

  const handleCount = (e) => {
    const countAction = e.currentTarget.dataset.count;
    console.log(countAction);
    if (countAction === "increment") {
      setIncrement(!increment);
    } else if (countAction === "decrement" && cartItemCount > 1) {
        setDecrement(!decrement);
    }
    dispatch(handleCountAction(id, e));
  };

  const handleRemoveItem = () => {
    setRemove(!remove);
    dispatch(handleDeleteItem(id));
  };

  return (
    <Container>
      <Content>
        <ProductImg className="w-25">
          <img src={image} />
        </ProductImg>
        <ProductInfo className="w-50 ps-3">
          <h5 className=" text-truncate">{title}</h5>
          <p>{price} $</p>
        </ProductInfo>
        <CartProductActions className="w-25 d-flex align-items-center justify-content-between ps-md-3 ps-lg-5">
          <ProductCount>
            <div data-count="increment" onClick={(e) => handleCount(e)}>
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
              onClick={(e) => handleCount(e)}
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
            <div onClick={handleRemoveItem}>
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
        </CartProductActions>
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
  width: 50%;
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

const CartProductActions = styled.div``;

export default CartProduct;
