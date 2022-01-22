import styled from "styled-components";
import addBasket from "../../assets/icons/146-basket-trolley-shopping-card-outline-edited.json";
// import { Rating } from '@material-ui/lab/Rating';
import Rating from "@mui/material/Rating";
import Lottie from "lottie-react-web";
import { Fragment, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../reducers/cart";
import ProductPerLoader from "../preLoader/ProductPerLoader";
import { toast } from "react-toastify";

const Product = (props) => {
  const productLoader = useSelector((state) => state.productLoader);
  const dispatch = useDispatch();
  const { title, price, description, image, rating, count, id } = props;
  const [addBasketIcon, setAddBasketIcon] = useState(false);
  let { pathname } = useLocation();
  const cart = useSelector((state) => state.cart);
  let isExistInCart = cart.find((p) => p.id === id);

  const handleAddToCart = () => {
    console.log("object");
    toast.success(`${title} added to cart`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    dispatch(addToCart(id));
  };
  return (
    <Card>
      <Link to={`products/p/${id}`}>
        <CardImg>
          <img src={image} />
        </CardImg>
      </Link>
      <CardContent>
        <h2 className="product-title">{title}</h2>
        
        <div className="product-info">
          <div className="rating">
            <Rating name="read-only" value={rating} readOnly />
            <span className="price">({count})</span>
          </div>
        </div>
      </CardContent>
        <CardFooter>
          <Price>
            <span>Price</span>
            <p>{price}$</p>
          </Price>
          <button
            onMouseEnter={() => setAddBasketIcon(!addBasketIcon)}
            onClick={handleAddToCart}
            disabled={isExistInCart}
          >
            {isExistInCart ? (
              <Fragment>
              <i class="bi bi-check-lg"></i>
              <span>In cart</span>
              </Fragment>
            ) : (
              <Fragment>
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
                <span>Add to Cart</span>
              </Fragment>
            )}
          </button>
        </CardFooter>
    </Card>
  )
};

const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background: rgba(235, 146, 123, 0.5); */
  border: 1px solid rgba(235, 146, 123, 0.9);
  color: #1d0d0c;
  border-radius: 10px;
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
  transition: all 0.2s ease-in-out !important;
  margin: 1rem;
  &:hover {
    box-shadow: 0px 0px 12px -1px rgba(235, 146, 123, 0.7);
    /* background-color: rgba(235, 146, 123, 0.2); */
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
    background-color: #ffffff;
    border: 2px solid #363671;
    padding: 0.1rem 0.5rem;
    border-radius: 10px;
    color: #363671;
    cursor: pointer;
    font-size: 13px;
    font-weight: 700;
    transition: all 0.2s ease-in-out;
    font-size: 14px;
    div {
      width: 40px;
    }
    &:hover {
      background-color: rgba(235, 146, 123, 0.2);
    }
    &:disabled {
      opacity: 0.5;
    }
    i {
      width: 48px;
      font-size: 25px;
    }
  }
`;
const Price = styled.div`
  margin-left: 10px;
  margin-bottom: -15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    color: rgba(0, 0, 0, 0.6);
  }
`;
export default Product;
