export const addToCart = (id) => {
  return async (dispatch, getState) => {
    const allProduct = [...getState().products.filteredProducts];
    const product = { ...allProduct.find((p) => p.id === id), count: 1 };
    await dispatch({ type: "ADD_TO_CART", payload: product });
    localStorage.setItem("cart", JSON.stringify(getState().cart));
  };
};
export const handleCountAction = (id, e) => {
  return async (dispatch, getState) => {
    const countAction = e.currentTarget.dataset.count;
    const allCartItems = [...getState().cart];
    const cartItemIndx = allCartItems.findIndex((p) => p.id === id);
    const cartItem = allCartItems[cartItemIndx];
    if (countAction === "increment") {
      cartItem.count += 1;
    } else if (countAction === "decrement") {
      if (cartItem.count > 1) {
        cartItem.count -= 1;
      }
    }
    allCartItems[cartItemIndx] = cartItem;
    await dispatch({ type: "CHANGE_NUMBER_CART", payload: allCartItems });
    localStorage.setItem("cart", JSON.stringify(getState().cart));
  };
};

export const handleDeleteItem = (id) => {
  return async (dispatch, getState) => {
    const allCartItems = [...getState().cart];
    const newCartItems = allCartItems.filter((i) => i.id !== id);
    await dispatch({ type: "REMOVE_CART_ITEM", payload: newCartItems });
    localStorage.setItem("cart", JSON.stringify(getState().cart));
  };
};

export const initCart = (payload) => {
  return async (dispatch) => {
    await dispatch({ type: "INIT_CART", payload });
  };
};

export const clearCart = () => {
  return async (dispatch, getState) => {
    await dispatch({ type: "CLEAR_CART", payload: [] });
    localStorage.setItem("cart", JSON.stringify(getState().cart));

  };
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_CART":
      return action.payload;
    case "ADD_TO_CART":
      //   state.push(action.payload)
      return [...state, action.payload];
    case "CLEAR_CART":
      return action.payload;
    case "CHANGE_NUMBER_CART":
      return [...action.payload];
    case "REMOVE_CART_ITEM":
      return [...action.payload];
    default:
      return state;
  }
};

export default cartReducer;
