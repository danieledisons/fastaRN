import axios from "axios";

export const getUserDataRequest = () => ({ type: "GET_USER_DATA_REQUEST" });
export const getUserDataSuccess = (data) => ({
  type: "GET_USER_DATA_SUCCESS",
  data,
});
export const getUserDataFailure = (error) => ({
  type: "GET_USER_DATA_FAILURE",
  error,
});

export const getUserData = () => {
  return (dispatch) => {
    dispatch(getUserDataRequest());
    axios
      .get("https://reqres.in/api/users/2")
      .then((response) => {
        const userData = response.data.data;
        if (response.status === 200) {
          console.log(888, userData);
          dispatch(getUserDataSuccess(userData));
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .catch((error) => dispatch(getUserDataFailure(error)));
  };
};
