import "./styles.css";
import { Link } from "react-router-dom";

export default function NewPostButton() {
  return (
    <div className="post-button">
      <Link to="/posts/new">
        <div href="/posts/new">Nova Publicacao</div>
      </Link>
    </div>
  );
}
