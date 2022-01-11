export const addToCart = (id) => {
  return async (dispatch, getState) => {
    const allProduct = [...getState().products.filteredProducts];
    const product = {...allProduct.find((p) => p.id === id), count: 1};
    // console.log(product);
    await dispatch({ type: "ADD_TO_CART", payload: product });
  };
};

export const clearCart = () => {
    return async (dispatch) => {
        await dispatch({ type: "CLEAR_CART", payload:[]})
    }
}

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //   state.push(action.payload)
      return [...state, action.payload];
    case "CLEAR_CART":
        return action.payload
    default:
      return state;
  }
};

export default cartReducer;
