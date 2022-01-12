import styled from "styled-components";
import UseAnimations from "react-useanimations";
// import icon from "./12-layes-outline-edited.json";
import user from "../assets/icons/21-avatar-outline-edited.json";
import basket from "../assets/icons/139-basket-outline-edited (1).json";
import search from "../assets/icons/19-magnifier-zoom-search-outline-edited (1).json";
import Lottie from "lottie-react-web";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [userIcon, setUserIcon] = useState(false);
  const [basketIcon, setBasketIcon] = useState(false);
  const [searchIcon, setSearchIcon] = useState(false);

  const cart = useSelector(state => state.cart)

  useEffect(() => {
    setBasketIcon(!basketIcon)
  } , [cart.length])
  return (
    <Container>
      <Link to="/">
        <Logo>
          <img src="/images/shopify_logo_darkbg.svg" />
        </Logo>
      </Link>
      <Serach onMouseEnter={() => setSearchIcon(!searchIcon)}>
        <span>
          <Lottie
            direction={searchIcon ? 1 : -1}
            options={{
              animationData: search,
              loop: false,
              autoplay: false,
            }}
          />
        </span>
        <input />
      </Serach>
      <div>
        <div onMouseEnter={() => setUserIcon(!userIcon)}>
          <Lottie
            direction={userIcon ? 1 : -1}
            options={{
              animationData: user,
              loop: false,
              autoplay: false,
            }}
          />
        </div>
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
  /* height: 50px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding:0rem; */
  width: 100%;
  background-color: #363671;
  color: #ffffff;
  padding: 1rem 1rem !important;
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
export default Header;
