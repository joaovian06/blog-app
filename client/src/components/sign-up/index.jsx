import React, { useState } from "react";
import "../../assets/shared/styles/signInSignUpStyles.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      }),
    });
    console.log(response.json());
  };

  return (
    <div className="container">
      <div className="header">
        <h3 className="title">Sign Up</h3>
        <div className="underline"></div>
      </div>

      <div className="sign-up-fields">
        <div className="input">
          <i className="fa-regular fa-user fa-xl"></i>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input">
          <i className="fa-regular fa-envelope fa-xl"></i>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <i className="fa-solid fa-lock fa-xl"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input">
          <i className="fa-solid fa-lock fa-xl"></i>
          <input
            type="password"
            placeholder="Password Confirmation"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={onHandleSubmit}>
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default SignUp;
