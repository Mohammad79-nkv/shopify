import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { getSingleProduct } from "../../reducers/singleProduct";
import Rating from "@mui/material/Rating";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch(getSingleProduct(id));
    // console.log(product)
  }, []);
  return (
    <Container>
      <Content className="row container-fluid pt-5">
        <ProductImage className="d-flex flex-column col-12 col-lg-8 col-xl-3">
          <div className="w-100 mx-auto">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              className="mx-auto w-100 img-fluid"
            />
          </div>
          <div className="d-flex justify-content-between me-5 ps-2 py-3">
            <i class="bi bi-heart"></i>
            <i class="bi bi-share-fill"></i>
            <i class="bi bi-bell"></i>
            <i class="bi bi-graph-up"></i>
          </div>
        </ProductImage>
        <ProductInfo className="col-12 col-lg-8 col-xl-6 d-flex flex-column align-items-start">
          <ProductType className="text-capitalize text-opacity-50 text-dark">
            dress
          </ProductType>
          <ProductTitle className="text-capitalize text-dark w-100 pb-3 pt-1">
            dress
          </ProductTitle>
          <RatingDiv className="pb-4">
            <div className="d-flex pt-2">
              <i class="bi bi-emoji-smile mx-1"></i>
              <p className="text-muted ">
                85% (10 people) of buyers have offered this product
              </p>
            </div>
            <Rating name="read-only" value={2} readOnly />
          </RatingDiv>
          <Description>
            lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet,
            consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor
            sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem
            ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet,
            consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor
            sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem
            ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet,
            consectetur
          </Description>
        </ProductInfo>
        <div className="col-12 col-lg-4 col-xl-3 py-xl-5">
        <ProductAction className="">
          <div className="d-flex justify-content-between p-3">
            <p className="m-0">Seller</p>
            <h5>Shopify</h5>
          </div>
          <div className="d-flex justify-content-start align-items-center px-3">
            <p className="guarantee text text-muted font m-0 py-3">
              <i class="bi bi-shield-fill-check"></i> Guarantee of authenticity
              and physical health of the product
            </p>
          </div>
          <div className="delivery d-flex flex-column p-3 ">
            <p>Available in Shopify warehouse</p>
            <div>
              <i class="bi bi-truck me-2"></i>
              <small>Delivery</small>
            </div>
          </div>
          <AddCart className="d-flex justify-content-around py-3">
            <div className="d-flex flex-column px-3">
              <p className="m-0 text-muted">Price</p>
              <p className="m-0 font-weight-bold">100 $</p>
            </div>
            <button className="btn btn-danger px-5">Add to Cart</button>
          </AddCart>
        </ProductAction>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  margin-top: 80px;
`;
const Content = styled.div``;
const ProductImage = styled.div`
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
  background-color: rgba(0, 0, 0, 0.023);
`;
const ProductType = styled.div``;
const ProductTitle = styled.h5`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
const RatingDiv = styled.div``;
const Description = styled.div``;
const ProductAction = styled.div`
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 10px;
  border: 2px solid #ee537c;
  @media (min-width: 992px) and (max-width: 1200px) {
    /* display: none; */
    /* position: sticky!important; */
    margin-top:-300px
  }
  & > div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .guarantee {
    font-size: 12px;
    i {
      font-size: 15px;
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
    z-index:9999999;
    bottom: -5px;
    left: 0;
    right: 0;
    background-color:white;
    border-radius:10px;
    box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.3);
  }
`;

export default SingleProduct;
