const initialState = {
  data: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_USER_DATA_SUCCESS":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "GET_USER_DATA_FAILURE":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
