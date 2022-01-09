// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProduct,
  getCategoryService,
} from "./../services/productServices";

// export const getProduct = createAsyncThunk("product/fetchAllProducts", async () => {
//   const response = await getAllProduct();
//   return response;
// });

// const productsSlice = createSlice({
//   name: "products",
//   initialState: [],
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getProduct.fulfilled, (state, action) => {
//       state.entities.push(action.payload);
//     });
//   },
// });

// export default productsSlice;

export const getProducts = () => {
  return async (dispatch) => {
    const { data } = await getAllProduct();
    await dispatch({ type: "INIT_PRODUCTS", payload: data });
  };
};
export const getCategories = () => {
  return async (dispatch) => {
    const res = await getCategoryService();
    await dispatch({ type: "GET_CATEGORY", payload: res.data });
  };
};

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case "INIT_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_CATEGORY":
      return {
        ...state,
        categories: ["all", ...action.payload],
      };
    default:
      return state;
  }
};

export default productsReducer;
