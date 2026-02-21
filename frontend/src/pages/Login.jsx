import React, { useState } from "react";
import UserLayout from "../components/userLayout";
import UserDetails from "../components/userDetails";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/UserApi";
import "../styles/Login.css";
import { validateLogin } from "../components/validation.jsx";

// ✅ Font Awesome (install if not added)
// npm install @fortawesome/fontawesome-free
import "@fortawesome/fontawesome-free/css/all.min.css";

function Login() {

  const navigate = useNavigate();

  // 🔐 Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ⭐ Role State
  const [role, setRole] = useState("user");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // 🚀 Handle Login
  const handleLogin = async () => {

    const errorMessage = validateLogin(email, password);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setError("");
    setMessage("");

    try {
      // ✅ Send role also
      const response = await loginUser(email, password, role);

      if (response.data.success) {

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", role);

        setMessage("✅ Login Successful");

        setTimeout(() => {
          navigate("/Home");
        }, 500);

      } else {
        setMessage("❌ Login Unsuccessful");
      }

    } catch (err) {
      setMessage("❌ Server Error / Invalid Credentials");
      console.error(err);
    }
  };

  return (
    <UserLayout title="Login Form">

      {/* ⭐ ROLE TABS */}
      <div className="role-tabs">

        <div
          className={`role-tab ${role === "user" ? "active" : ""}`}
          onClick={() => setRole("user")}
        >
          <i className="fa-solid fa-user"></i>
          <span>User</span>
        </div>

        <div
          className={`role-tab ${role === "shop_owner" ? "active" : ""}`}
          onClick={() => setRole("shop_owner")}
        >
          <i className="fa-solid fa-store"></i>
          <span>Shop Owner</span>
        </div>

        <div
          className={`role-tab ${role === "admin" ? "active" : ""}`}
          onClick={() => setRole("admin")}
        >
          <i className="fa-solid fa-gear"></i>
          <span>Admin</span>
        </div>

      </div>

      {/* Inputs */}
      <UserDetails
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />

      {/* Validation error */}
      {error && <p className="error-message">{error}</p>}

      {/* Backend message */}
      {message && (
        <p
          className="response-message"
          style={{
            color: message.includes("Successful")
              ? "green"
              : "red"
          }}
        >
          {message}
        </p>
      )}

      <div className="login-actions">
        <button
          onClick={handleLogin}
          disabled={!email || !password}
        >
          Login
        </button>

        <p>
          <Link to="/forgot-password" className="register-Link">
            Forgot Password?
          </Link>
        </p>
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