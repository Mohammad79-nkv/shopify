import {
  getAllProduct,
  getCategoryService,
} from "./../services/productServices";
import { setLoading } from "./productLoaded";

export const getProducts = () => {
  return async (dispatch) => {
    const { data } = await getAllProduct();
    await dispatch(setLoading())
    await dispatch({ type: "INIT_PRODUCTS", payload: data });
  };
};
export const getCategories = () => {
  return async (dispatch) => {
    const res = await getCategoryService();
    await dispatch({ type: "GET_CATEGORY", payload: res.data });
  };
};

export const filterProducts = (e) => {
  return async (dispatch, getState) => {
    const allProducts = [...getState().products.products];
    const filterTitle = e.target.dataset.filter;
    const filteredProducts =
      filterTitle === ""
        ? allProducts
        : allProducts.filter((p) => p.category === filterTitle);
    await dispatch({ type: "FILTER_PRODUCTS", payload: filteredProducts });
  };
};
export const sortProduct = (e) => {
  return async (dispatch, getState) => {
    const allProducts = [...getState().products.filteredProducts];
    const sortTitle = e.target.dataset.sortitem;
    let sortedProducts = [];
    switch (sortTitle) {
      case "p-Descending":
        sortedProducts = allProducts.sort((a, b) => b.price - a.price);
        // sortedProducts.push();
        break;
      case "p-ascending":
        sortedProducts = allProducts.sort((a, b) => a.price - b.price);
        break;

      case "Popularity":
        sortedProducts = allProducts.sort(
          (a, b) => b.rating.rate - a.rating.rate
        );

        break;
      default:
        sortedProducts = allProducts;
    }
    await dispatch({ type: "SORT", payload: sortedProducts });
  };
};



const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case "INIT_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case "GET_CATEGORY":
      return {
        ...state,
        categories: ["all", ...action.payload],
      };
    case "FILTER_PRODUCTS":
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case "SORT":
      return {
        ...state,
        filteredProducts: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
