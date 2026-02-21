import axios from "axios";

const BASE_URL = "http://localhost/react1/"; //change url

export const loginUser = (email, password) => {
  return axios.post(`${BASE_URL}login1.php`, { email, password });
};

export const registerUser = (firstName,lastName,email, password,confirmPassword) => {
  return axios.post(`${BASE_URL}register.php`, {
    firstName,
    lastName,
    email,
    password,
    confirmPassword
   });
};