import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import search from "../assets/icons/19-magnifier-zoom-search-outline-edited (1).json";
import {
  getCategories,
  getProducts,
  handleDelete,
  sortProduct,
} from "../reducers/product";
import Product from "./common/Product";
import Lottie from "lottie-react-web";
import { filterProducts } from "./../reducers/product";
import FilterPreLoader from "./preLoader/FilterPreLoader";
import ProductWrapper from "./wrapper/ProductWrapper";
import PreLoaderWrapper from "./preLoader/PreLoaderWrapper";
import { useState } from "react";

const AllProducts = () => {
  const [sortTitle, setSortTitle] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("");

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);
  const categories = useSelector((state) => state.products.categories);
  const productLoader = useSelector((state) => state.productLoader);
  const [searchIcon, setSearchIcon] = useState(false);
  const ref = useRef();
 
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    setCategoryTitle(e.target.innerText);
    dispatch(filterProducts(e));
    setSortTitle("")
  };
  const handleSort = (e) => {
    e.preventDefault();
    setSortTitle(e.target.innerText);
    dispatch(sortProduct(e));
  };
  const handleActive = (e) => {
    const btns = [...ref.current.children];
    btns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    handleFilter(e);
  };


  return (
    <Container className="mt-5">
      <Serach className="mb-5 mt-5" onMouseEnter={() => setSearchIcon(!searchIcon)}>
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
        <input placeholder="Inter your product title ..." />
      </Serach>
      <ManageProducts className="d-flex p-5 justify-content-around justify-content-lg-center mx-lg-5 ">
        <div className="dropdown  me-lg-5">
          <button
            class="btn btn-outline-dark dropdown-toggle me-lg-5"
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
            <li>
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
        <div className="d-none d-lg-flex">
          {productLoader ? (
            <div
              ref={ref}
              className="btn-groupp d-flex w-100 justify-content-center d-none d-lg-flex"
            >
              {categories &&
                categories.map((categorie, index) => (
                  <button
                  key={index}
                    onClick={(e) => handleActive(e)}
                    type="button"
                    className="btn btn-outline-success mx-1"
                    data-filter={categorie === "all" ? "" : categorie}
                  >
                    {categorie.toUpperCase()}
                  </button>
                ))}
            </div>
          ) : (
            <FilterPreLoader />
          )}
        </div>
        {categories && (
          <div className="dropdown d-lg-none">
            <button
            className="btn btn-outline-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-funnel"></i> categories
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {categories.map((categorie, index) => (
                <li className=" cursor-pointer" key={index}>
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
      <SortFilterInfo className="w-100 d-flex justify-content-center">
        <div className=" w-50 d-flex justify-content-between flex-column flex-md-row">
          {sortTitle !== "" && (
            <div className="mb-3">
              <span className="text-muted">Sort By : </span>
              <span>{sortTitle}</span>
            </div>
          )}
          {categoryTitle !== "" && (
            <div>
              <span className="text-muted">Category : </span>
              <span>{categoryTitle}</span>
            </div>
          )}
        </div>
      </SortFilterInfo>
      <Content className="container d-flex flex-wrap justify-content-center">
        {productLoader && products ? <ProductWrapper /> : <PreLoaderWrapper />}
      </Content>
    </Container>
  );
};
const ManageProducts = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
const Content = styled.div`
  width: 100%;
  margin-top: 80px;
`;
const Container = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.7);

  min-height: calc(100vh + 80px);
`;
const SortFilterInfo = styled.div`
  div {
  }
`;

const Serach = styled.div`
  margin: 0px auto;
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  width: 50%;
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

export default AllProducts;
