import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link to="/aboutme">
                <span>About Me</span>
            </Link>
            <Link to="/">
                <span>Home Page</span>
            </Link>
        </header>
    );
}