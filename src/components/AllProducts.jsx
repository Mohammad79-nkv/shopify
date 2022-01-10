import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getCategories, getProducts, handleDelete, sortProduct } from "../reducers/product";
import Product from "./common/Product";
import { filterProducts } from "./../reducers/product";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);
  const categories = useSelector((state) => state.products.categories);
  const ref = useRef();
  //   const products = allProducts.slice(0, 5);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  const handleFilter = (e) => {
    dispatch(filterProducts(e));
  };
  const handleSort = (e) => {
    dispatch(sortProduct(e));
    
  };
  const handleActive = (e) => {
    const btns = [...ref.current.children];
    btns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    handleFilter(e);
  };

  return (
    <Container>
      <ManageProducts className="d-flex p-5 justify-content-around mx-lg-5 ">
        <div class="dropdown  ">
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
            <li>
              <a
                href="#"
                class="dropdown-item"
                data-sortItem="p-Descending"
                onClick={(e) => handleSort(e)}
              >
                <i class="bi bi-sort-down mx-1"></i>Price (High to Low)
              </a>
            </li>
            <li
              
            >
              <a
                href="#"
                class="dropdown-item"
                data-sortItem="p-ascending"
                onClick={(e) => handleSort(e)}
              >
                <i class="bi bi-sort-down-alt mx-1"></i>Price (Low to High)
              </a>
            </li>
            <li>
              <a
                href="#"
                class="dropdown-item"
                data-sortItem="Popularity"
                onClick={(e) => handleSort(e)}
              >
                <i class="bi bi-heart mx-1"></i>Popularity
              </a>
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
                <li class=" cursor-pointer	">
                  <a
                    className="dropdown-item"
                    href="#"
                    data-filter={categorie === "all" ? "" : categorie}
                    onClick={(e) => handleFilter(e)}
                  >
                    {categorie.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </ManageProducts>
      <Content className="container d-flex flex-wrap justify-content-center">
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
