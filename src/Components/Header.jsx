import { Link } from "react-router-dom";

export default function Header({ count }) {
  return (
    <header className="Header">
      <Link to="/">
        <span>Home</span>
      </Link>
      
      {/* Wrapped in a Link to navigate to the history page */}
      <Link to="/streak-history" style={{ textDecoration: "none", color: "inherit" }}>
        <div>
          <span className="Header__streak">Streak</span>
          <span className="Header__streak-count">{count}</span>
          <span className="Header__history">History</span>
        </div>
      </Link>

      <Link to="/about">
        <span>About</span>
      </Link>
    </header>
  );
}