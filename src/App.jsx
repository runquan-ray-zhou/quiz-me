import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./Components/HomePage";
import Form from "./Components/Form"
import TriviaGame from "./Components/TriviaGame"
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import './App.css'

const BASE_URL = "https://opentdb.com/api.php?amount=1"

function App() {

  const [triviaCategory, setCategory] = useState("")
  const [triviaDifficulty, setDifficulty] = useState("")
  const [triviaType, setType] = useState("")

  const url = BASE_URL+triviaCategory+triviaDifficulty+triviaType
  
  return (
    <div className="App.css">
      <main>  
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/aboutme" element={<AboutMe />}/>
            <Route path="/form" element={<Form setCategory={setCategory} setDifficulty={setDifficulty} setType={setType} />}/>
            <Route path="/triviagame" element={<TriviaGame url={url} />}/>
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
