import { useState } from "react";
import { Link } from "react-router-dom";
export default function Question({ question, setCount, count }) {
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
      setCount(count + 1);
    } else {
      e.target.style.color = "white";
      e.target.style.background = "red";
      e.target.style.font = "bold";
      e.target.style.border = "none";
      setAnswer("Try Again!");
      setWrongShow("block");
      setCount(0);
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
      <p className="Question__category">
        {formatCategory(decodeHtmlEntities(question.category))}
      </p>
      <p className="Question__question">
        {decodeHtmlEntities(question.question)}
      </p>
      <p className="Question__correct-answer" style={{ display: display }}>
        {decodeHtmlEntities(correct)}
      </p>
      {choices.map((choice, i) => (
        <input
          style={{ display: hide }}
          className="Question__answer-choices"
          type="button"
          key={i}
          onClick={handleClick}
          value={decodeHtmlEntities(choice)}
        />
      ))}
      <p className="Question__answer-prompt">{answer}</p>
      <Link to="/form">
        <button
          className="Question__play-button"
          style={{ display: correctShow }}
        >
          Get New Question
        </button>
      </Link>
    </div>
  );
}
