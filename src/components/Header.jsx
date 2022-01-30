import styled from "styled-components";
import UseAnimations from "react-useanimations";
// import icon from "./12-layes-outline-edited.json";
import userImg from "../assets/icons/21-avatar-outline-edited.json";
import basket from "../assets/icons/139-basket-outline-edited (1).json";
import search from "../assets/icons/19-magnifier-zoom-search-outline-edited (1).json";
import Lottie from "lottie-react-web";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../reducers/user";

const Header = () => {
  const [userIcon, setUserIcon] = useState(false);
  const [basketIcon, setBasketIcon] = useState(false);
  const [searchIcon, setSearchIcon] = useState(false);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setBasketIcon(!basketIcon);
  }, [cart.length]);

  const handleLogOut = () => {
    localStorage.removeItem("user")
    dispatch(logOut())
  }

  return (
    <Container className="p-4">
      <Link to="/">
        <Logo>
          <img src="/images/shopify_logo_darkbg.svg" />
        </Logo>
      </Link>
      <div>
        {user.fullname ? (
          <Fragment>
            <div className=" userIcon w-100">
              <div
                className="userIcon"
                onMouseEnter={() => setUserIcon(!userIcon)}
              >
                <Lottie
                  direction={userIcon ? 1 : -1}
                  options={{
                    animationData: userImg,
                    loop: false,
                    autoplay: false,
                  }}
                />
              </div>
              <div className="UserInfo d-flex flex-column rounded-3">
                <div className="userDetail d-flex align-items-center justify-content-start w-100 mb-2">
                  <i class="bi bi-person-circle mx-1 w-25  font"></i>
                  <div className="d-flex flex-column w-100">
                    <h5 className="m-0 p-0 text-capitalize text-black">
                      {user.fullname}
                    </h5>
                    <small className="m-0 p-0 text-wrap text-muted">
                      {user.email}
                    </small>
                  </div>
                </div>
                <div className="logOut w-100">
                  <button className="btn my-2 ms-3" onClick={handleLogOut}>
                      <i class="bi bi-box-arrow-right text-reset"></i>
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <SignIn className="">
            <Link to="/signin" className="w-100">
              <span className="w-100 d-flex justify-content-center align-items-center">
                <h6 className="m-0">Sign In</h6>
              </span>
            </Link>
          </SignIn>
        )}

        <Link to="cart">
          <div
            className="basket"
            onMouseEnter={() => setBasketIcon(!basketIcon)}
          >
            <Lottie
              direction={basketIcon ? 1 : -1}
              options={{
                animationData: basket,
                loop: false,
                autoplay: false,
              }}
            />
            <span>{cart.length}</span>
          </div>
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.header`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding:0rem; */
  width: 100%;
  background-color: #363671;
  color: #ffffff;
  /* padding: 1rem 1rem !important; */
  box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  left: 0;
  div {
    display: flex;
    flex-direction: row;
    margin-right: 1rem;
    div {
      width: 48px;
      cursor: pointer;
    }
    a {
      text-decoration: none !important;
      color: white !important;
      /* padding: 0 !important; */
      /* width: 60px; */
      /* height: 60px; */
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .basket {
      padding-left: 10px;
      border-left: 1px solid #ee537c;
      position: relative;
      span {
        background-color: #ee537c;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 5px;
        border-radius: 50%;
        position: absolute;
        right: -10px;
        z-index: 999999;
      }
    }
  }
  .userIcon {
    position: relative;
    .UserInfo {
      display: none!important;
      box-shadow: 0px 0px 12px -1px rgba(54, 54, 113, 0.5);
      position: absolute;
      top: 45px;
      /* right:10px; */
      left: -110px;
      width: auto;
      background-color: white;
      transition: all 0.2s ease-in-out;
      .userDetail {
        i:nth-child(1) {
          font-size: 40px;
          color: rgba(238, 83, 124, 0.9);
          /* border-radius: 20px; */
        }
      }
      .logOut {
        border-top: 1px solid rgba(238, 83, 124, 0.8);
        button {
          color: white;
          background-color: rgba(238, 83, 124, 0.8);
          &:hover {
            background-color: rgba(238, 83, 124, 1);
          }
        }
      }
    }
    &:hover {
      .UserInfo {
        display:flex!important;
      }
    }
  }
`;
const Logo = styled.div`
  img {
    width: 120px;
    /* height: 100px; */
    background-color: transparent;
  }
`;
const Serach = styled.div`
  background-color: rgba(62, 81, 150, 0.7);
  width: 30%;
  padding: 5px;
  border-radius: 10px;
  span {
    width: 48px;
  }
  input {
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    font-size: 20px;
    color: #ee537c;
  }
`;
const SignIn = styled.div`
  width: 100px !important;
  border-radius: 10px;
  background-color: rgba(62, 81, 150, 1);
`;

export default Header;
