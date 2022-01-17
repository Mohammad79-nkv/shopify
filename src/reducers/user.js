export const setUser = (user) => {
    return async (dispatch) => {
        dispatch({type: "SET_USER", payload: user})
    }
}


const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
