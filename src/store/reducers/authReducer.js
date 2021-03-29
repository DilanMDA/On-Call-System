const intialState = {
  error: null,
  loading: false,
};

// reducer function
const authReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "AUTH_START":
      return { ...state, loading: true };
    case "AUTH_END":
      return { ...state, loading: false };
    case "AUTH_FAIL":
      return { ...state, error: payload };

    default:
      return state;
  }
};
export default authReducer;
