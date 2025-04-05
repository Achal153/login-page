import React, { useState } from "react";
import LoginForm from "./LoginForm";
import OtpVerification from "./OtpVerification";
import SuccessPage from "./SuccessPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("login");
  const [email, setEmail] = useState("");

  const handleLoginSuccess = (userEmail) => {
    setEmail(userEmail);
    setCurrentPage("otp");
  };

  const handleOtpSuccess = () => {
    setCurrentPage("success");
  };

  return (
    <>
      {currentPage === "login" && <LoginForm onSuccess={handleLoginSuccess} />}
      {currentPage === "otp" && (
        <OtpVerification email={email} onSuccess={handleOtpSuccess} />
      )}
      {currentPage === "success" && <SuccessPage />}
    </>
  );
};

export default App;
