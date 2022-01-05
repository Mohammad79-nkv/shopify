import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProducts } from "../reducers/product";
import Product from "./Product";

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    useEffect(() => {
        dispatch(getProducts())
    },[] )
    return ( 
        <Container>
            <Content className="container">
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
            </Content>
        </Container>
     );
}
 
const Container = styled.div`
    width: 100%;
`;
const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default Products;