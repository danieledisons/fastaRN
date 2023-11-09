import axios from "axios";

const loginAPI = (email, password) => {
  const data = {
    email: email,
    password: password,
  };
  axios
    .post("https://reqres.in/api/login", data)
    .then((response) => {
      return response.status;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};
