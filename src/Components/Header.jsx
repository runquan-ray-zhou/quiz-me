import { Link } from "react-router-dom";

export default function Header({ count }) {
  return (
    <header className="Header">
      <Link to="/">
        <span>Home</span>
      </Link>
      <div>
        <span className="Header__streak">Streak</span>
        <span className="Header__streak-count">{count}</span>
      </div>
      <Link to="/about">
        <span>About</span>
      </Link>
    </header>
  );
}
