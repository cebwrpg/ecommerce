// App.jsx
import React from "react";
import Login from "./pages/Login"; // matches your file name
import Register from "./pages/Register";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";

function HomePage(){
  return <Home/>;  //this will display home page
}
function LoginForm() {
  return <Login />; // this will display the login form
}
function RegisterForm(){
  return <Register/>; //this will diplay the register form
}
function ForgotPasswordForm(){
  return <ForgotPassword/>; // this will display the forgot password form
}

export default Home;