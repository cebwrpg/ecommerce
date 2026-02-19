import React, { useState } from "react";
import UserLayout from "../components/userLayout.jsx";
import UserDetails from "../components/userDetails.jsx";
import { Link } from "react-router-dom";
import { loginUser } from "../api/userApi.jsx";
import "./login.css";
import { validateLogin } from "../components/validation.jsx";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");

  const handleLogin = () => {
    const errorMessage = validateLogin(email,password);
    if(errorMessage){
      setError(errorMessage);
      return
    }

    setError("");
    loginUser(email, password)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <UserLayout className="login-heading" title="Login Form">
      <UserDetails
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      {error && <p className="error-message">{error}</p>}
      <div className="login-actions">
        <button 
        onClick={handleLogin}
        disabled={!email || !password}>
          Login
        </button>
        <p><Link to="/forgot-password" className="register-link">
            Forgot Password?
            </Link></p>
      </div>
      <div className="actions">
      <p>
        I don't have an account.?{" "}
        <Link to="/register" className="register-link">
        Register
        </Link>
        </p>
        </div>
    </UserLayout>
  );
}

export default Login;
