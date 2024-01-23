import React, { useState } from "react";
import "../../assets/shared/styles/signInSignUpStyles.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/auth/sign_in", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => {
      if (res.status === 200) {
        navigate("/");
      }
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h3 className="title">Sign In</h3>
        <div className="underline"></div>
      </div>

      <div className="sign-up-fields">
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
      </div>

      <div className="submit-container">
        <div className="submit" onClick={onHandleSubmit}>
          Sign in
        </div>
      </div>
    </div>
  );
};

export default SignIn;
