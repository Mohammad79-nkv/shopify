import styled from "styled-components";
import addBasket from "../assets/icons/146-basket-trolley-shopping-card-outline-edited.json";
// import { Rating } from '@material-ui/lab/Rating';
import Rating from "@mui/material/Rating";
import Lottie from "lottie-react-web";
import { useState } from "react";
const Product = (props) => {
  const { title, price, description, image, rating, count } = props;
  const [addBasketIcon, setAddBasketIcon] = useState(false);

  return (
    <Card>
      <CardImg>
        <img src={image} />
      </CardImg>
      <CardContent>
        <h2 className="product-title">{title}</h2>
        <p className="product-description">
          {description.split(" ").slice(0, 10).join(" ")} ...
        </p>
        <div className="product-info">
          <div className="rating">
            <Rating name="read-only" value={rating} readOnly />
            <span className="price">{count}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p>{price}$</p>
        <button onMouseEnter={() => setAddBasketIcon(!addBasketIcon)}>
          <div>
            <Lottie
              direction={addBasketIcon ? 1 : -1}
              options={{
                animationData: addBasket,
                loop: false,
                autoplay: false,
              }}
            />
          </div>
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
};

const Card = styled.div`
  width: 313px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(235, 146, 123, 0.5);
  color: #1d0d0c;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.2s ease-in-out !important;
  margin: 1rem;
  &:hover {
    box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.3);
    background-color: rgba(235, 146, 123, 1);
  }
`;
const CardImg = styled.div`
  width: 100%;
  /* height: 100px; */
  cursor: pointer;
  img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
`;
const CardContent = styled.div`
  padding: 12px;
  /* line-height: 0.7; */
  h2 {
    cursor: pointer;
    font-size: 20px;
  }
  p {
    margin: 10px 0;
  }
  .product-description {
    color: rgba(0, 0, 0, 0.7);
  }
  .product-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .rating {
      display: flex;
      align-items: center;
      .price {
        margin-left: 7px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px;
  p {
    font-size: 19px;
    font-weight: bold;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(62, 81, 150, 0.9);
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    color: #ffffff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 700;
    transition: all 0.2s ease-in-out;
    div {
      width: 40px;
    }
    &:hover {
      background-color: rgba(62, 81, 150, 1);
    }
  }
`;
export default Product;
