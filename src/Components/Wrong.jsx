import { Link } from "react-router-dom"
export default function Wrong() {
    return (
        <div>
            <p>You are Wrong!</p>
            <Link to="/question">
                <button>Try Again</button>
            </Link>
        </div>
    );
}