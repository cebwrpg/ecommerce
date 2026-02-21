import React, { useState } from "react";
import axios from "axios";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  // Send OTP
  const sendOtp = async () => {

    if (!email) {
      setMessage("Enter Gmail first");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/send-otp",
        { email }
      );

      if (res.data.success) {
        setStep(2);
        setMessage("OTP sent to your Gmail");
      }

    } catch {
      setMessage("Error sending OTP");
    }
  };

  // Verify OTP
  const verifyOtp = async () => {

    if (otp.length !== 6) {
      setMessage("Enter valid 6 digit OTP");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/verify-otp",
        { email, otp }
      );

      if (res.data.success) {
        setMessage("OTP Verified ✅");

        // Redirect to reset password
        window.location.href = "/reset-password";
      } else {
        setMessage("Invalid OTP ❌");
      }

    } catch {
      setMessage("Verification error");
    }
  };

  return (
    <div className="form-box">

      <h2>Forgot Password</h2>

      {step === 1 && (
        <>
          <input
            type="email"
            placeholder="Enter Gmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={sendOtp}>
            Send OTP
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button onClick={verifyOtp}>
            Verify OTP
          </button>
        </>
      )}

      <p>{message}</p>

    </div>
  );
}

export default ForgotPassword;