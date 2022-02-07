import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import {
  clearSingleProduct,
  getSingleProduct,
} from "../../reducers/singleProduct";
import Rating from "@mui/material/Rating";
import { addToCart } from "../../reducers/cart";
import Recommend from "../Recommend";
import { toast } from "react-toastify";
import Spinner from "../preLoader/Spinner";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
    return () => {
      dispatch(clearSingleProduct());
    };
  }, [id]);

  const product = useSelector((state) => state.singleProduct);
  const cart = useSelector((state) => state.cart);
  const productId = product.id;
  const rate = !product.rating ? { rate: 5, count: 5 } : product.rating;

  const satisfactionPercentage = (rate.rate / 5) * 100;

  const handleAddToCart = (id) => {
    console.log("object");
    toast.success(
      <p>
        <span style={{ fontWeight: "bold" }}>{product.title}</span> added to
        cart
      </p>,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    dispatch(addToCart(id));
  };

  let isExistInCart = cart.find((p) => p.id === productId);

  return (
    product && (
      <Container>
        <Content className="row container-fluid p-0 m-0">
          <ProductImage className="d-flex flex-column col-12 col-lg-8 col-xl-3 mb-2 pt-4">
            <div className="w-100 mx-auto">
              {product.image ? (
                <img
                  className="mx-auto w-100"
                  src={product.image}
                  alt={product.category}
                />
              ) : (
                <Spinner color = "#EB927B" size = "300"/>
              )}
            </div>
            <div className="d-flex justify-content-between me-5 ps-2 py-3">
              <i className="bi bi-heart"></i>
              <i className="bi bi-share-fill"></i>
              <i className="bi bi-bell"></i>
              <i className="bi bi-graph-up"></i>
            </div>
          </ProductImage>
          <ProductInfo className="col-12 col-lg-8 col-xl-6 d-flex flex-column align-items-start py-3">
            <ProductType className="text-capitalize text-opacity-50 text-dark">
              {product.category}
            </ProductType>
            <ProductTitle className="text-capitalize text-dark w-100 pb-3 pt-1">
              {product.title}
            </ProductTitle>
            <RatingDiv className="pb-4">
              <div className="d-flex justify-content-center align-items-center pt-2 mb-2">
                <i className="bi bi-check-circle-fill me-1 text-primary"></i>{" "}
                <p className="text-muted m-0">
                  {satisfactionPercentage.toFixed()}% ({rate.count} people) of
                  buyers have offered this product
                </p>
              </div>
              <Rating name="read-only" value={rate.rate} readOnly />
            </RatingDiv>
            <Description>{product.description}</Description>
          </ProductInfo>
          <div className="col-12 col-lg-4 col-xl-3 py-4 py-xl-5">
            <ProductAction className="mx-auto w-100">
              <div className="d-flex justify-content-between p-3">
                <p className="m-0">Seller</p>
                <h5>Shopify</h5>
              </div>
              <div className="d-flex justify-content-start align-items-center px-3">
                <p className="guarantee text text-muted font m-0 py-3">
                  <i className="bi bi-shield-fill-check"></i> Guarantee of
                  authenticity and physical health of the product
                </p>
              </div>
              <div className="delivery d-flex flex-column p-3 ">
                <p>Available in Shopify warehouse</p>
                <div>
                  <i className="bi bi-truck me-2 red"></i>
                  <small>Delivery</small>
                </div>
              </div>
              <AddCart className="d-flex justify-content-around py-3">
                <div className="d-flex flex-column px-3">
                  <p className="m-0 text-muted">Price</p>
                  <p className="m-0 font-weight-bold">{product.price} $</p>
                </div>
                <button
                  disabled={isExistInCart}
                  onClick={() => handleAddToCart(product.id)}
                  className="btn px-5"
                >
                  {product.image ? (
                    isExistInCart ? (
                      <Fragment>
                        <i className="bi bi-check-lg"></i>
                        <span>In cart</span>
                      </Fragment>
                    ) : (
                      <span>Add to Cart</span>
                    )
                  ) : (
                    <Spinner color = "#EB927B" size = "45"/>
                  )}
                </button>
              </AddCart>
            </ProductAction>
          </div>
          <Recommend category={product.category} />
        </Content>
      </Container>
    )
  );
};

const Container = styled.div`
  min-height: 100vh;
  margin-top: 80px;
  @media (max-width: 1200px) {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
const Content = styled.div``;
const ProductImage = styled.div`
  background-color: white;
  box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.05);
  img {
    width: 400px;
    height: 400px;
    object-fit: contain;
  }
  i {
    padding: 4px 7px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
const ProductInfo = styled.div`
  box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.1);
  @media (max-width: 1200px) {
    background-color: rgba(235, 146, 123, 0.1);
    border: 2px solid rgba(235, 146, 123, 0.3);
    border-radius: 5px;
  }
`;
const ProductType = styled.div``;
const ProductTitle = styled.h5`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
const RatingDiv = styled.div`
  i {
    font-size: 20px;
  }
`;
const Description = styled.div``;
const ProductAction = styled.div`
  background-color: rgba(62, 81, 150, 0.05);
  border-radius: 10px;
  border: 2px solid rgba(62, 81, 150, 0.3);
  @media (min-width: 992px) and (max-width: 1200px) {
    /* display: none; */
    /* position: sticky!important; */
    margin-top: -300px;
  }
  & > div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .guarantee {
    font-size: 12px;
    i {
      font-size: 20px;
      color: green;
    }
  }
  .delivery {
    line-height: 0.5;
    i {
      font-size: 20px;
    }
  }
`;
const AddCart = styled.div`
  @media (max-width: 992px) {
    position: fixed;
    z-index: 9999999;
    bottom: -5px;
    left: 0;
    right: 0;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.3);
  }
  p:nth-child(2) {
    font-size: 20px;
    font-weight: 600;
  }
  button {
    background-color: rgba(54, 54, 113, 0.9);
    color: white;
    &:hover {
      color: white;
      background-color: rgba(54, 54, 113, 1);
      box-shadow: 0px 0px 12px -1px rgba(54, 54, 113, 0.5);
    }
  }
`;

export default SingleProduct;
