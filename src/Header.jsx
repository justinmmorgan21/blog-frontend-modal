import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <a href="/">Home</a> | <Link to="/posts">All posts</Link> | <Link to="/posts/new">New post</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
    </header>
  );
}
