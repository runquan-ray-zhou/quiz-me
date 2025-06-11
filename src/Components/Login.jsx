import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="circle">
        <div className="circle1">
          <div className="circle2">
            <div className="circle3">
              <i className="fa-solid fa-question"></i>
            </div>
          </div>
        </div>
      </div>
      <span>Quiz-Me</span>
      <div className="login-button__container">
        <Link to="/form">
          <button className="login-button">PLAY</button>
        </Link>
      </div>
    </div>
  );
}
