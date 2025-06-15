import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login";
import Form from "./Components/Form";
import TriviaGame from "./Components/TriviaGame";
import Header from "./Components/Header";
import About from "./Components/About";
import "./App.css";

function App() {
  const [triviaCategory, setCategory] = useState("");
  const [triviaDifficulty, setDifficulty] = useState("");
  const [triviaType, setType] = useState("");
  const [count, setCount] = useState(0);

  const BASE_URL = `https://opentdb.com/api.php?amount=1&category=${triviaCategory}&difficulty=${triviaDifficulty}&type=${triviaType}`;
  const RANDOM_URL = `https://opentdb.com/api.php?amount=1&category=&difficulty=&type=`;

  return (
    <div className="App.css">
      <main>
        <Router>
          <Header count={count} />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/form"
              element={
                <Form
                  setCategory={setCategory}
                  setDifficulty={setDifficulty}
                  setType={setType}
                />
              }
            />
            <Route
              path="/question"
              element={
                <TriviaGame url={BASE_URL} setCount={setCount} count={count} />
              }
            />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
