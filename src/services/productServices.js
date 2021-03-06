import axios from "axios";

export const getAllProduct = () => {
  return axios.get("https://fakestoreapi.com/products");
};
export const getCategoryService = () => {
  return axios.get("https://fakestoreapi.com/products/categories");
};
export const getSingleProductService = (id) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
};
