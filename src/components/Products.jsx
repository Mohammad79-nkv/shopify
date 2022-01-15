import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../reducers/product";
import Product from "./common/Product";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  // if(allProducts) {const products = allProducts.slice(0, 5);}
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);
  return (
    <Container>
      <Content className="container">
        {products &&
          products.slice(0, 5).map((p) => (
            <Product
              key={p.id}
              title={p.title}
              price={parseInt(p.price)}
              description={p.description}
              image={p.image}
              rating={p.rating.rate}
              count={p.rating.count}
            />
          ))}
      </Content>
      <Link to="/products">
        <Button>ALL PRODUCTS</Button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: rgba(235, 146, 123, 0.1);
  a {
      text-decoration: none;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Button = styled.button`
  display: block;
  padding: 12px 80px;
  background-color: rgba(238, 83, 124, 0.8);
  color: white;
  border: none;
  margin: 20px auto;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(238, 83, 124, 1);
  }
`;

export default Products;
