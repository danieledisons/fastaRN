const initialState = {
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        token: null,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        token: action.data,
        loading: false,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
