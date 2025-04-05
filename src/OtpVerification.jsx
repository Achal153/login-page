import React, { useState } from "react";
import "./OtpVerification.css";
import backgroundImage from "./assets/otp.png";

const OtpVerification = ({ email, onSuccess }) => {
  const [otp, setOtp] = useState("");
  const [isValidOtp, setIsValidOtp] = useState(true);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setIsValidOtp(true);
    setVerificationSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctOtp = sessionStorage.getItem("otp");
    const otpEmail = sessionStorage.getItem("otpEmail");

    if (otp === correctOtp && email === otpEmail) {
      setIsValidOtp(true);
      setVerificationSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 1500);
    } else {
      setIsValidOtp(false);
      setVerificationSuccess(false);
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay"></div>
      <h1 className="welcome-title">Welcome to Demo</h1>
      <div className="rectangle">
        <form className="otp-card" onSubmit={handleSubmit}>
          <h2 className="otp-title">OTP Verification</h2>
          <div className="input-wrapper">
            <label htmlFor="otpinput" className="otp-label">Enter OTP :</label>
            <input
              type="text"
              id="otpInput"
              className="input"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter OTP"
              maxLength="6"
            />
          </div>
          {!isValidOtp && (
            <p className="error-message" style={{ color: "red" }}>
              ! Enter Valid OTP
            </p>
          )}
          {verificationSuccess && (
            <p className="success-message" style={{ color: "green" }}>
              ! Verification Successful
            </p>
          )}
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
