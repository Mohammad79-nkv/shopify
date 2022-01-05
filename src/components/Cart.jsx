import styled from "styled-components";
import CartProduct from "./common/CartProduct";

const Cart = () => {
  return (
    <Container className="w-100 p-0">
      <Content className="row container-fluid w-100 p-0 m-0">
        <ProductCart className="col-12 col-md-8">
          <div className="cart-header w-100 d-flex justify-content-center align-items-center ">
            <h1>YOUR CART</h1>
          </div>
          <ProductWrapper>
            <CartProduct/>
          </ProductWrapper>
        </ProductCart>
        <CartInfo className="col-12 col-md-4 "></CartInfo>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 80px;
  height: calc(100vh - 80px) !important;
`;
const Content = styled.div`
  height: 100% !important;
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
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`;
const ProductWrapper = styled.div``;
export default Cart;
