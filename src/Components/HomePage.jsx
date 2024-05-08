import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <main>
            <h1>Welcome to Quiz-Me</h1>
            <Link to="/form">
                <button className="play__button">Play</button>
            </Link>
        </main>
    );
}