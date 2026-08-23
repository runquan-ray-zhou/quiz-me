import { useMemo } from "react";
import { Link } from "react-router-dom";

// Helper function to decode HTML entities (like &quot; or &#039;) from the API response
const decodeHtmlEntities = (text) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

// Helper function to clean up category titles (e.g., "Entertainment: Video Games" -> "Video Games")
const formatCategory = (category) => {
  if (category.includes(":")) {
    return category.split(": ")[1];
  }
  return category;
};

export default function Question({ 
  question, 
  setCount, 
  count, 
  setStreakHistory, 
  isCorrect, 
  setIsCorrect, 
  wrongChoices = [], // Default fallback array to prevent undefined errors
  setWrongChoices, 
  answer, 
  setAnswer 
}) {
  const correct = question.correct_answer;

  // Memoize (cache) answer choices by combining incorrect and correct answers, then sorting them alphabetically
  const choices = useMemo(() => {
    return [...question.incorrect_answers, question.correct_answer].sort();
  }, [question]);

  // Handle user click on an answer choice button
  function handleClick(e) {
    const value = e.target.value;

    if (value === decodeHtmlEntities(correct)) {
      // If the answer is correct: update states, increment streak count, and append question to history
      setIsCorrect(true);
      setAnswer("You Are Correct!");
      setCount(count + 1);
      setStreakHistory((prev) => [...(prev || []), question]);
    } else {
      // If the answer is wrong: track the choice, reset streak count, and clear streak history
      setWrongChoices((prev) => [...(prev || []), value]);
      setAnswer("Try Again!");
      setCount(0);
      setStreakHistory([]);
    }
  }

  return (
    <div className="Question">
      {/* Display formatted trivia category */}
      <p className="Question__category">
        {formatCategory(decodeHtmlEntities(question.category))}
      </p>
      
      {/* Display decoded trivia question text */}
      <p className="Question__question">
        {decodeHtmlEntities(question.question)}
      </p>

      {/* Show the correct answer banner only after guessing correctly */}
      {isCorrect && (
        <p className="Question__correct-answer">
          {decodeHtmlEntities(correct)}
        </p>
      )}

      {/* Render answer options as buttons, disabling or styling them based on user interaction */}
      {choices.map((choice, i) => {
        const decodedChoice = decodeHtmlEntities(choice);
        const isWrong = wrongChoices.includes(decodedChoice);

        return (
          <input
            key={i}
            className="Question__answer-choices"
            type="button"
            onClick={handleClick}
            value={decodedChoice}
            disabled={isCorrect || isWrong}
            style={{
              display: isCorrect ? "none" : "block",
              ...(isWrong
                ? {
                    color: "white",
                    backgroundColor: "red",
                    border: "none",
                  }
                : {}),
            }}
          />
        );
      })}

      {/* Show feedback prompt message ("You Are Correct!", "Try Again!") */}
      <p className="Question__answer-prompt">{answer}</p>

      {/* Show 'Get New Question' link/button only after a correct answer is given */}
      {isCorrect && (
        <Link to="/form">
          <button className="Question__play-button">
            Get New Question
          </button>
        </Link>
      )}
    </div>
  );
}