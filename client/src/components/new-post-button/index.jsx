import "./styles.css";
import { Link } from "react-router-dom";

export default function NewPostButton() {
  return (
    <div className="post-button">
      <Link to="/posts/new">
        <a href="/posts/new">Nova Publicacao</a>
      </Link>
    </div>
  );
}
