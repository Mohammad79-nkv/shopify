export const setLoading = () => {
  return { type: "FINISH_LOADING" };
};

const productLoader = (state = false, action) => {
  switch (action.type) {
    case "FINISH_LOADING":
      return true;
    default:
      return state;
  }
};

export default productLoader;
