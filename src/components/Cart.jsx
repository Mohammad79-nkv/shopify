import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { clearCart } from "../reducers/cart";
import CartProduct from "./common/CartProduct";
import Footer from "./Footer";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const emptyCart = cartItems.length === 0;

  const handleClearCart = () => {
    dispatch(clearCart());
    setShowModal(!showModal);
  };

  const handleTotalPrice = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.count, 0)
      .toFixed(2);
  };

  return (
    <Container className="w-100 p-0">
      <Content className="row container-fluid w-100 p-0 m-0">
        <ProductCart className="col-12 col-md-8 p-0">
          <div className="cart-header w-100 d-flex justify-content-center align-items-center  ">
            <h1>YOUR CART</h1>
          </div>
          {emptyCart && (
            <div className="p-2">
              <div className="bg-dark bg-opacity-25 w-100 rounded-3 p-3">
                <div className="bg-white d-flex flex-column align-items-center p-2">
                  <h4>Your Cart is empty</h4>
                  <Link to="/products">
                    <button className="btn bg-danger bg-opacity-75 text-white mt-3">
                      ALL PRODUCTS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
          <ProductWrapper>
            {cartItems &&
              cartItems.map((p) => (
                <CartProduct
                  title={p.title}
                  price={p.price}
                  image={p.image}
                  id={p.id}
                />
              ))}
          </ProductWrapper>
        </ProductCart>
        <CartInfo className="col-12 col-md-4">
          {user.fullname ? (
            <UserInfo>
              <h4>User information :</h4>
              <div className="mb-2">
                <h6>Name</h6>
                <p>{user.fullname}</p>
              </div>
              <div>
                <h6>EMAIL</h6>
                <p>{user.email}</p>
              </div>
            </UserInfo>
          ) : (
            <div className="mt-md-5 d-flex flex-md-column mt-3 justify-content-center align-items-center border-">
              <h4>You are not logged in</h4>
              <Link to={"/signin"}>
                <button className="btn btn-primary ms-5 ms-md-0 px-4">Sign in</button>
              </Link>
            </div>
          )}

          <CartFooter>
            <TotalPrice className="my-4">
              <h6>Total Price:</h6>
              <h5>{handleTotalPrice().toString()} $</h5>
            </TotalPrice>
            <CartAction className="d-flex justify-content-center w-100 mt-4 mb-2">
              <button
                className="clear"
                onClick={() => setShowModal(!showModal)}
                disabled={emptyCart}
              >
                Clear Cart
              </button>
              <button className="confirm " disabled={emptyCart}>
                Confirm
              </button>
            </CartAction>
          </CartFooter>
        </CartInfo>
      </Content>
      {showModal && (
        <div className="d-flex w-100 h-100 justify-content-center align-items-center position-fixed top-0 bottom-0 bg-dark bg-opacity-50">
          <div className="w-auto h-auto bg-white rounded-3">
            <h5 className="pt-4 pb-3 d-flex justify-content-center align-items-center px-3">
              Are you sure to remove{" "}
              <span className="font-weight-bolder text-danger mx-1">
                {cartItems.length}
              </span>{" "}
              {`${cartItems.length > 1 ? "item`s" : "item"}`}{" "}
            </h5>
            <div className="py-3 d-flex justify-content-between align-items-center px-5">
              <button
                className="btn btn-outline-danger"
                onClick={() => setShowModal(!showModal)}
              >
                Cancel
              </button>
              <button className="btn btn-danger" onClick={handleClearCart}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 80px;
  position: relative;
  min-height: calc(100vh - 80px);
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
  /* height: 230px; */
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0px;
    right: 0;
    width: 100%;
    z-index: 999;
    background-color: white;
    box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
`;
const ProductWrapper = styled.div`
  /* min-height: 100vh; */
`;
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
    justify-content: space-between;
    /* padding-right: 200px; */
  }
`;
const CartAction = styled.div`
  button {
    padding: 10px 20px;
    border-radius: 10px;
    &:disabled {
      opacity: 0.5;
    }
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
const Modal = styled.div`
  /* position: fixed; */
  /* width: 100vw; */
  /* height: 100vh; */
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  /* z-index: 1000; */
`;
export default Cart;
