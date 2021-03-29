const intialState = {
  error: null,
  loading: false,
};

// reducer function
const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true };
    case "AUTH_END":
      return { ...state, loading: false };

    default:
      return state;
  }
};
export default authReducer;
