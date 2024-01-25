import React from "react";
import "../post-form/styles.css";

const PostForm = () => {
  return (
    <div className="container">
      <div className="header">
        <h3 className="title">Novo Post</h3>
        <div className="underline"></div>
      </div>

      <div className="sign-up-fields">
        <div className="input">
          <input type="text" placeholder="Titulo" />
        </div>

        <div className="input">
          <input type="textarea" placeholder="description" />
        </div>
      </div>

      <div className="submit-container">
        <div className="submit">Sign in</div>
      </div>
    </div>
  );
};

export default PostForm;
