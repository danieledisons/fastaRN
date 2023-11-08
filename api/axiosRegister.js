import axios from "axios";

// Use redux for fetching of data, it can indicated when its done loading and all that.

const registerAPI = (email, password) => {
  const data = {
    email: email,
    password: password,
  };
  axios
    .post("https://reqres.in/api/register", data)
    .then((response) => {
      console.log("Response:", response.status);
      return response.status;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

const loginAPI = (email, password) => {
  const data = {
    email: email,
    password: password,
  };
  axios
    .post("https://reqres.in/api/login", data)
    .then((response) => {
      console.log("Response:", response.status);
      return response.status;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

export default registerAPI;
