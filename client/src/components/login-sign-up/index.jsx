import React from "react";
import "./styles.css";

const LoginSignUp = () => {
  return (
    <div className="container">
      <div className="header">
        <h3 className="title">Sign Up</h3>
        <div className="underline"></div>
      </div>

      <div className="sign-up-fields">
        <div className="input">
          <i className="fa-regular fa-user fa-xl"></i>
          <input type="text" placeholder="Name" />
        </div>

        <div className="input">
          <i className="fa-regular fa-envelope fa-xl"></i>
          <input type="email" placeholder="E-mail" />
        </div>

        <div className="input">
          <i className="fa-solid fa-lock fa-xl"></i>
          <input type="password" placeholder="Password" />
        </div>

        <div className="input">
          <i className="fa-solid fa-lock fa-xl"></i>
          <input type="password" placeholder="Password Confirmation" />
        </div>
      </div>

      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Sign in</div>
      </div>
    </div>
  );
};

export default LoginSignUp;
