import "./styles.css";

export default function Post({ post }) {
  return (
    <div className="post-container">
      <div>
        <img className="post-image" src={post.image} alt="" />
      </div>
      <div>
        <h2 className="post-title">{post.title}</h2>
        <p className="post-date">{post.date}</p>
        <p className="post-body">{post.description}</p>
      </div>
    </div>
  );
}
