import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <Link href="/">
          <h3>Blog</h3>
        </Link>
      </div>
      <div>
        <Link className="nav-link" to="/">
          Home
        </Link>
        {/* <Link className="nav-link" to="/about">
          Sobre
        </Link>
        <Link className="nav-link" to="/contact">
          Contato
        </Link> */}
        <Link className="nav-link" to="/posts">
          Posts
        </Link>
        <Link className="nav-link login-button" to="/sign_in">
          Login
        </Link>
        <Link className="nav-link sign-up-button" to="/sign_up">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
