import React, { useState } from "react";
import "../../assets/shared/styles/signInSignUpStyles.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let navigate = useNavigate();

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Location: "/sign_in",
      },
      mode: "cors",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      }),
    }).then((res) => {
      if (res.status === 200) {
        navigate("/sign_in");
      }
    });
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
            required
          />
        </div>

        <div className="input">
          <i className="fa-regular fa-envelope fa-xl"></i>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input">
          <i className="fa-solid fa-lock fa-xl"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input">
          <i className="fa-solid fa-lock fa-xl"></i>
          <input
            type="password"
            placeholder="Password Confirmation"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
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
