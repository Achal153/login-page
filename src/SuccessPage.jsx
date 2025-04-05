import React from "react";
import "./SuccessPage.css";
import backgroundImage from "./assets/congo.png";
const SuccessPage = () => {
  return (
    <div
      className="success-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <h1 className="success-message">
        Congratulations, You Have Successfully Logged In
      </h1>
    </div>
  );
};

export default SuccessPage;
