export const addToCart = (id) => {
  return async (dispatch, getState) => {
    const allProduct = [...getState().products.filteredProducts];
    const product = { ...allProduct.find((p) => p.id === id), count: 1 };
    // console.log(product);
    await dispatch({ type: "ADD_TO_CART", payload: product });
  };
};

export const handleCountAction = (id, e) => {
  console.log("hello");
  console.log("2");
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
  };
};

export const handleDeleteItem = (id) => {
  return async (dispatch, getState) => {
    const allCartItems = [...getState().cart];
    const newCartItems = allCartItems.filter((i) => i.id !== id);
    await dispatch({ type: "REMOVE_CART_ITEM", payload: newCartItems });
  };
};

export const clearCart = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_CART", payload: [] });
  };
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
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
