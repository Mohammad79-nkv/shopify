import { getSingleProductService } from "../services/productServices";

export const getSingleProduct = (id) => {
  return async (dispatch) => {
    const { data } = await getSingleProductService(id);
    await dispatch({ type: "GET_SINGLE_PRODUCT", payload: data });
  };
};

const singleProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SINGLE_PRODUCT":
      return { ...action.payload };
    default:
      return state;
  }
};

export default singleProductReducer;
