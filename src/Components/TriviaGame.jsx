import Question from "./Question";

export default function TriviaGame({ 
  trivia, 
  setCount, 
  count, 
  setStreakHistory, 
  isCorrect, 
  setIsCorrect, 
  wrongChoices, 
  setWrongChoices, 
  answer, 
  setAnswer 
}) {
  return (
    <div>
      <div>
        {/* Map through the stored trivia array and pass all necessary game and state props down to each Question component */}
        {trivia.map((question, i) => (
          <Question
            key={i}
            question={question}
            setCount={setCount}
            count={count}
            setStreakHistory={setStreakHistory}
            isCorrect={isCorrect}
            setIsCorrect={setIsCorrect}
            wrongChoices={wrongChoices}
            setWrongChoices={setWrongChoices}
            answer={answer}
            setAnswer={setAnswer}
          />
        ))}
      </div>
    </div>
  );
}