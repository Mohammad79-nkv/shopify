export const setUser = (user) => {
    return async (dispatch) => {
        await dispatch({type: "SET_USER", payload: user})
    }
}

export const logOut = () => {
  return async (dispatch) => {
    await dispatch({type:"LOG_OUT", payload: {}})
  }
}


const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...action.payload };
    case "LOG_OUT":
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
