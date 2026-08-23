import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login";
import Form from "./Components/Form";
import TriviaGame from "./Components/TriviaGame";
import Header from "./Components/Header";
import About from "./Components/About";
import StreakHistory from "./Components/StreakHistory";
import "./App.css";

function App() {
  // Game & Streak History States (lifted to act as the single source of truth)
  const [streakHistory, setStreakHistory] = useState([]);
  const [triviaCategory, setCategory] = useState("");
  const [triviaDifficulty, setDifficulty] = useState("");
  const [triviaType, setType] = useState("");
  const [count, setCount] = useState(0);
  const [trivia, setTrivia] = useState([]);

  // Question Interaction States (persists user guesses across navigation to prevent reset issues)
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongChoices, setWrongChoices] = useState([]);
  const [answer, setAnswer] = useState("");

  // Dynamic API URL based on user form selections
  const BASE_URL = `https://opentdb.com/api.php?amount=1&category=${triviaCategory}&difficulty=${triviaDifficulty}&type=${triviaType}`;

  return (
    <div className="App.css">
      <main>
        <Router>
          {/* Persistent header displaying current streak count */}
          <Header count={count} />
          
          <Routes>
            {/* Login / Welcome screen */}
            <Route path="/" element={<Login />} />
            
            {/* About page */}
            <Route path="/about" element={<About />} />
            
            {/* Streak History review page */}
            <Route path="/streak-history" element={<StreakHistory streakHistory={streakHistory} />} />
            
            {/* Form page to configure and fetch trivia questions */}
            <Route
              path="/form"
              element={
                <Form
                  setCategory={setCategory}
                  setDifficulty={setDifficulty}
                  setType={setType}
                  setTrivia={setTrivia}
                  setIsCorrect={setIsCorrect}
                  setWrongChoices={setWrongChoices}
                  setAnswer={setAnswer}
                />
              }
            />
            
            {/* Active trivia gameplay screen */}
            <Route
              path="/question"
              element={
                <TriviaGame 
                  url={BASE_URL}
                  trivia={trivia} 
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
              }
            />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;