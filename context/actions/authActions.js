import axios from "axios";

export const loginRequest = () => ({ type: "LOGIN_REQUEST" });
export const loginSuccess = (data) => ({ type: "LOGIN_SUCCESS", data });
export const loginFailure = (error) => ({ type: "LOGIN_FAILURE", error });
export const resetState = () => ({ type: "RESET_STATE" });

export const loginUser = (email, password) => {
  const postData = { email: email, password: password };
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post("https://reqres.in/api/login", postData)
      .then((response) => {
        if (response.status === 200) {
          dispatch(loginSuccess(response.data));
        } else {
          throw new Error("Failed to login");
        }
      })
      .catch((error) => {
        console.log(222, error);
        dispatch(loginFailure(error));
      });
  };
};
