import "./About.css";
import selfPortrait from "../assets/GhibliSelfPortrait.png";

export default function About() {
  return (
    <div className="About">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://runquanrayzhou.netlify.app/"
      >
        <img className="About__img" src={selfPortrait} alt="self portrait" />
      </a>
      <p>Quiz-Me By: Runquan (Ray) Zhou</p>
      <div className="About__icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/runquan-ray-zhou/quiz-me"
        >
          <i className="fa-solid fa-code"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:rzhou@pursuit.org"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/runquan-ray-zhou"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/runquanrayzhou/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <p>All Rights Reserved 2026</p>
    </div>
  );
}
