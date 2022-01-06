import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../reducers/product";
import Product from "./common/Product";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
//   const products = allProducts.slice(0, 5);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Container className="d-flex flex-wrap justify-content-center">
      {products &&
        products.map((p) => (
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
    </Container>
  );
};
const Container = styled.div`
  /* height: 100vh; */
  width: 100%;
  margin-top:80px;
`;

export default AllProducts;
