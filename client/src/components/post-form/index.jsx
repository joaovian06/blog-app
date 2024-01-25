import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import getLoggedUserId from "../../utils/userUtils";
import "../post-form/styles.css";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/api/v1/posts/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("access-token"),
        client: localStorage.getItem("client"),
        uid: localStorage.getItem("uid"),
      },
      mode: "cors",
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          category_id: 1,
          user_id: await getLoggedUserId(),
        },
      }),
    }).then((res) => {
      if (res.ok) {
        navigate("/posts");

        return res.json();
      } else {
        throw new Error(res);
      }
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h3 className="title">Novo Post</h3>
        <div className="underline"></div>
      </div>

      <div className="sign-up-fields">
        <div className="input">
          <input
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="input">
          <input
            type="textarea"
            placeholder="Descricao"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={onHandleSubmit}>
          Salvar
        </div>
      </div>
    </div>
  );
};

export default PostForm;
