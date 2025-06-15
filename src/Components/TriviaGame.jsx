import { useEffect, useState } from "react";
import Question from "./Question";

export default function TriviaGame({ url, setCount, count }) {
  const [trivia, setTrivia] = useState([]);
  const [questions, setQuestions] = useState([]);

  const uberfxServerURL = "http://localhost:8080/quizme";

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((response) => response.results)
  //     .then((response) => setTrivia([...response]))
  //     .catch((error) => console.error(error));
  // }, []);

  useEffect(() => {
    fetch(uberfxServerURL)
      .then((response) => response.json())
      .then((response) => response.results)
      .then((response) => setTrivia([...response]))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setQuestions([...trivia]);
  }, [trivia.length]);

  return (
    <div>
      <div>
        {questions.map((question, i) => (
          <Question
            key={i}
            question={question}
            setCount={setCount}
            count={count}
          />
        ))}
      </div>
    </div>
  );
}
