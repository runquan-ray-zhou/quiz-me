import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <span>Home Page</span>
      </Link>
      <Link to="/about">
        <span>About Me</span>
      </Link>
    </header>
  );
}
