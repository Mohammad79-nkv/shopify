import styled from "styled-components";
import CartProduct from "./common/CartProduct";
import Footer from "./Footer";

const Cart = () => {
  
  return (
    <Container className="w-100 p-0">
      <Content className="row container-fluid w-100 p-0 m-0">
        <ProductCart className="col-12 col-md-8 p-0">
          <div className="cart-header w-100 d-flex justify-content-center align-items-center  ">
            <h1>YOUR CART</h1>
          </div>
          <ProductWrapper>
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </ProductWrapper>
        </ProductCart>
        <CartInfo className="col-12 col-md-4">
          <UserInfo>
            <h4>User information</h4>
            <div className="mb-2">
              <h6>Name</h6>
              <p>Mohammad</p>
            </div>
            <div>
              <h6>ADRESS</h6>
              <p>Khiban Piroozi</p>
            </div>
          </UserInfo>
          <CartFooter>
            <TotalPrice className="my-4">
              <h5>Total Price:</h5>
              <span>0 $</span>
            </TotalPrice>
            <CartAction className="d-flex justify-content-center w-100 mt-4">
              <button className="clear ">Clear Cart</button>
              <button className="confirm">Confirm</button>
            </CartAction>
          </CartFooter>
        </CartInfo>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 80px;
  position: relative;
  // height: calc(100vh) !important;
`;
const Content = styled.div`
  height: 100% !important;
  position: relative !important;
`;
const ProductCart = styled.div`
  height: 100% !important;
  .cart-header {
    height: 100px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    color: rgba(0, 0, 0, 0.7);
  }
`;
const CartInfo = styled.div`
  height: 230px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  @media (max-width: 768px) {
    position: fixed;
    bottom: -5px;
    right: 0;
    width: 100%;
    z-index:999;
    background-color: white;
    box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.3);
    border-radius:10px;
  }
`;
const ProductWrapper = styled.div``;
const CartFooter = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const TotalPrice = styled.div`
  width: 100%;
  /* padding-bottom: 39px; */
  display: flex;
  justify-content: center;
  align-items: center;
  h5 {
    margin-right: 10px;
    font-size: 23px;
    font-weight: 500;
  }
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding-top: 10px;
  h4 {
    padding: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h6 {
      font-size: 18px;
    }
    p {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content:space-between;
    /* padding-right: 200px; */
  }
`;
const CartAction = styled.div`
  button {
    padding: 10px 20px;
    border-radius: 10px;
  }
  .clear {
    margin-right: 20px;
    background: #ffffff;
    border: 2px solid #ee537c;
    color: #ee537c;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: rgba(238, 83, 124, 0.2);
    }
  }
  .confirm {
    background: #ee537c;
    border: none;
    color: #ffffff;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: rgba(238, 83, 124, 0.8);
    }
  }
`;
export default Cart;
