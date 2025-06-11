import { useState } from "react";
import { Link } from "react-router-dom";
export default function Question({ question }) {
  const [answer, setAnswer] = useState("");
  const [correctShow, setCorrectShow] = useState("none");
  const [wrongShow, setWrongShow] = useState("none");
  const [hide, setHide] = useState("block");
  const [display, setDisplay] = useState("none");

  const correct = question.correct_answer;
  const choices = question.incorrect_answers
    .concat([question.correct_answer])
    .sort();

  function handleClick(e) {
    if (e.target.value === correct) {
      e.target.style.color = "green";
      setAnswer("You Are Correct!");
      setCorrectShow("block");
      setWrongShow("none");
      setHide("none");
      setDisplay("block");
    } else {
      e.target.style.color = "white";
      e.target.style.background = "red";
      e.target.style.font = "bold";
      e.target.style.border = "none";
      setAnswer("You Are Wrong!");
      setWrongShow("block");
    }
  }

  function decodeHtmlEntities(text) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  }

  function formatCategory(category) {
    if (category.includes(":")) {
      return category.split(": ")[1];
    }
    return category;
  }

  return (
    <div className="Question">
      <p
        style={{
          fontWeight: "bold",
          fontSize: "1.4em",
          margin: "10px 0px",
        }}
      >
        {formatCategory(decodeHtmlEntities(question.category))}
      </p>
      <p style={{ fontSize: "0.95em", margin: "10px 0px" }}>
        {decodeHtmlEntities(question.question)}
      </p>
      <p className="answer" style={{ display: display }}>
        {decodeHtmlEntities(correct)}
      </p>
      {choices.map((choice, i) => (
        <input
          style={{ display: hide }}
          className="answer__choices"
          type="button"
          key={i}
          onClick={handleClick}
          value={decodeHtmlEntities(choice)}
        />
      ))}
      <p style={{ fontSize: "0.95em", margin: "10px 0px" }}>{answer}</p>
      <Link to="/form">
        <button className="play__button" style={{ display: correctShow }}>
          Get New Question
        </button>
      </Link>
      <p
        style={{
          display: wrongShow,
          fontSize: "0.95em",
          margin: "10px 0px",
        }}
      >
        Try Again!
      </p>
    </div>
  );
}
