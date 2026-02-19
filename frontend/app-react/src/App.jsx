// App.jsx
import React from "react";
import Login from "./pages/login"; // matches your file name
import Register from "./pages/register";

function LoginForm() {
  return <Login />; // this will display the login form
}
function RegisterForm(){
  return <Register/>; //this will diplay the register form
}

export default Login;
