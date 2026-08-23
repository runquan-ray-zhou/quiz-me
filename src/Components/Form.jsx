import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form({ setCategory, setDifficulty, setType, setTrivia, setIsCorrect, setWrongChoices, setAnswer }) {
  // Hook for programmatic navigation
  const navigate = useNavigate();
  
  // State to track whether any filter dropdown has been selected
  const [hasSelections, setHasSelections] = useState(false);

  // Checks form input values whenever a dropdown changes to toggle button text dynamically
  function handleChange(e) {
    const category = e.target.form.category.value;
    const difficulty = e.target.form.difficulty.value;
    const type = e.target.form.type.value;

    if (category !== "" || difficulty !== "" || type !== "") {
      setHasSelections(true);
    } else {
      setHasSelections(false);
    }
  }

  // Handles form submission: fetches trivia questions based on filters before navigating
  async function getQuestion(e) {
    e.preventDefault();
    const cat = e.target.category.value;
    const diff = e.target.difficulty.value;
    const typ = e.target.type.value;

    // Update filter states
    setCategory(cat);
    setDifficulty(diff);
    setType(typ);

    // Reset interaction states for the new question
    setIsCorrect(false);
    setWrongChoices([]);
    setAnswer("");

    // Build API request URL dynamically based on user selections
    const url = `https://opentdb.com/api.php?amount=1&category=${cat}&difficulty=${diff}&type=${typ}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("API request failed");
      const data = await response.json();
      
      // Store fetched trivia results and navigate to the question page
      setTrivia(data.results || []);
      navigate("/question");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="Form">
      <form onSubmit={getQuestion} onChange={handleChange}>
        {/* Category selection card */}
        <div className="Form__item">
          <label>
            <span className="questions">Select Category</span>
            <br />
            <select className="category" name="category" id="category">
              <option value="">Any Category</option>
              <option value="9">General Knowledge</option>
              <option value="10">Books</option>
              <option value="29">Comics</option>
              <option value="11">Film</option>
              <option value="12">Music</option>
              <option value="13">Musical & Theatres</option>
              <option value="14">Television</option>
              <option value="15">Video Games</option>
              <option value="16">Board Games</option>
              <option value="31">Anime & Manga</option>
              <option value="32">Cartoon & Animations</option>
              <option value="17">Science & Nature</option>
              <option value="18">Computers</option>
              <option value="30">Gadgets</option>
              <option value="19">Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
            </select>
          </label>
        </div>

        {/* Difficulty selection card */}
        <div className="Form__item">
          <label>
            <span className="questions">Select Difficulty</span>
            <br />
            <select className="difficulty" name="difficulty" id="difficulty">
              <option value="">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
        </div>

        {/* Type selection card */}
        <div className="Form__item">
          <label>
            <span className="questions">Select Type</span>
            <br />
            <select className="type" name="type" id="type">
              <option value="">Any Type</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
            </select>
          </label>
        </div>

        {/* Submit button text changes dynamically depending on selections */}
        <button className="getQuestion" type="submit">
          {hasSelections ? "Get Question" : "Get Random Question"}
        </button>
      </form>
    </div>
  );
}