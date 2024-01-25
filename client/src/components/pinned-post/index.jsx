import AuthorBadge from "../author-badge";
import "./styles.css";

export default function PinnedPost({ post }) {
  return (
    <div className="pinned-post-container">
      <div>
        <img className="pinned-post-image" src={post.image} alt="" />
      </div>
      <div>
        <h2 className="pinned-post-title">{post.title}</h2>
        <p className="pinned-post-date">{post.date}</p>
        <p className="pinned-post-body">{post.description}</p>
        <AuthorBadge />
      </div>
    </div>
  );
}
