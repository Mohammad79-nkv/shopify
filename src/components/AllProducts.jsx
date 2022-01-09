import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getCategories, getProducts } from "../reducers/product";
import Product from "./common/Product";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.products.categories);
  const ref = useRef();
  //   const products = allProducts.slice(0, 5);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  const handleActive = (e) => {
    const btns = [...ref.current.children];
    console.log(e.target.dataset.filter);
    btns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  };

  return (
    <Container>
      <ManageProducts className="d-flex p-5 justify-content-around">
        <div class="dropdown">
          <button
            class="btn btn-outline-dark dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-filter"></i>
            Sort
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li class="dropdown-item">
              {" "}
              <i class="bi bi-sort-down mx-1"></i>Price (High to Low)
            </li>
            <li class="dropdown-item">
              {" "}
              <i class="bi bi-sort-down-alt mx-1"></i>Price (Low to High)
            </li>
            <li class="dropdown-item">
              {" "}
              <i class="bi bi-heart mx-1"></i>Popularity
            </li>
          </ul>
        </div>
        <div
          ref={ref}
          className="btn-groupp d-flex w-100 justify-content-center d-none d-lg-flex"
        >
          {categories &&
            categories.map((categorie) => (
              <button
                onClick={(e) => handleActive(e)}
                type="button"
                class="btn btn-outline-success mx-1"
                data-filter={categorie === "all" ? "" : categorie}
              >
                {categorie.toUpperCase()}
              </button>
            ))}
        </div>
        {categories && (
          <div class="dropdown d-lg-none">
            <button
              class="btn btn-outline-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-funnel"></i> categories
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {categories.map((categorie) => (
                <li class="dropdown-item">{categorie.toUpperCase()}</li>
              ))}
            </ul>
          </div>
        )}
      </ManageProducts>
      <Content className="d-flex flex-wrap justify-content-center">
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
};
const ManageProducts = styled.div``;
const Content = styled.div`
  width: 100%;
  margin-top: 80px;
`;
const Container = styled.div`
  min-height: calc(100vh + 80px);
  margin-top: 80px;
`;

export default AllProducts;
