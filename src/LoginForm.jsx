import React, { useState } from "react";
import "./loginform.css";
import backgroundImage from "./assets/login.png";

const LoginForm = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [otpSent, setOtpSent] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
    setOtpSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsValidEmail(true);
      setOtpSent(true);

      const mockOtp = "123456";
      console.log(`OTP for ${email}: ${mockOtp}`);
      sessionStorage.setItem("otp", mockOtp);
      sessionStorage.setItem("otpEmail", email);

      setTimeout(() => {
        onSuccess(email);
      }, 1500);
    } else {
      setIsValidEmail(false);
      setOtpSent(false);
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="login-overlay"></div>
      <h1 className="login-welcome-title">Welcome to Demo</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>

        <div className="login-input-group">
          <label htmlFor="emailInput" className="login-input-label">
            Enter Email:
          </label>
          <input
            type="email"
            id="emailInput"
            className={`login-input ${!isValidEmail ? "input-error" : ""}`}
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Email id"
          />
          {!isValidEmail && (
            <p className="login-error-message">! Enter Valid Email id</p>
          )}
          {otpSent && (
            <p className="login-success-message">! OTP Sent Successfully</p>
          )}
        </div>

        <button type="submit" className="login-submit-button">
          Get OTP
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
