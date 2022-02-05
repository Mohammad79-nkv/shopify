import { getSingleProductService } from "../services/productServices";

export const getSingleProduct = (id) => {
  return async (dispatch) => {
    const { data } = await getSingleProductService(id);
    await dispatch({ type: "GET_SINGLE_PRODUCT", payload: data });
  };
};

export const clearSingleProduct = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_SINGLE_PRODUCT" });
  };
};

const singleProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SINGLE_PRODUCT":
      return { ...action.payload };
    case "CLEAR_SINGLE_PRODUCT":
      return {}
    default:
      return state;
  }
};

export default singleProductReducer;
