export const addToCart = (id) => {
  return async (dispatch, getState) => {
    const allProduct = [...getState().products.filteredProducts];
    const product = allProduct.find((p) => p.id === id);
    console.log(product);
    await dispatch({ type: "ADD_TO_CART", payload: product });
  };
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //   state.push(action.payload)
      return [...state, action.payload];
    default:
      return state;
  }
};

export default cartReducer;
