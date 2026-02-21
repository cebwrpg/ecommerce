import React, { useState } from "react";
import UserDetails from "../components/userDetails";
import UserLayout from "../components/userLayout";
import { registerUser } from "../api/UserApi";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { validateRegister } from "../components/validation.jsx";

function Register() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // ✅ success msg

  const handleRegister = async (e) => {
    e.preventDefault();

    // Frontend validation
    const errorMessage = validateRegister(
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    );

    if (errorMessage) {
      setError(errorMessage);
      setMessage("");
      return;
    }

    setError("");
    setMessage("");

    try {
      const response = await registerUser(
        firstName,
        lastName,
        email,
        password
      );

      if (response.data.success) {
        setMessage("✅ Registration Successful");
        setTimeout(() => {
          navigate("/Home"); // change route if needed
        }, 100);
      } else {
        setMessage("❌ Registration Unsuccessful");
      }

    } catch (err) {
      setMessage("❌ Server Error");
      console.error(err);
    }
  };

  return (
    <UserLayout title="Register Form">

      <UserDetails
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
      />

      {/* Validation error */}
      {error && <p className="error-message">{error}</p>}

      {/* Backend message */}
      {message && (
        <p
          className="response-message"
          style={{
            color: message.includes("Successful") ? "green" : "red"
          }}
        >
          {message}
        </p>
      )}

      <button type="button" onClick={handleRegister}>
        Register
      </button>

      <div className="AA">
        <p>
          Already have an account?.{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>

    </UserLayout>
  );
}

export default Register;
