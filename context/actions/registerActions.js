import axios from "axios";

export const registerRequest = () => ({ type: "REGISTER_REQUEST" });
export const registerSuccess = (data) => ({ type: "REGISTER_SUCCESS", data });
export const registerFailure = (error) => ({ type: "REGISTER_FAILURE", error });
export const resetState = () => ({ type: "RESET_STATE" });

export const registerUser = (first_name, last_name, email_address) => {
  const postData = {
    first_name: first_name,
    last_name: last_name,
    email_address: email_address,
  };
  return (dispatch) => {
    dispatch(registerRequest);
    axios
      .post("https://reqres.in/api/users", postData)
      .then((response) => {
        dispatch(registerSuccess(response.data));
      })
      .catch((error) => {
        dispatch(registerFailure(error));
      });
  };
};
