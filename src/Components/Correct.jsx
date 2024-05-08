import { Link } from "react-router-dom"
export default function Correct() {
    return (
        <div>
            <p>You are correct!</p>
            <Link to="/form">
                <button>Get New Question</button>
            </Link>
        </div>
    );
}