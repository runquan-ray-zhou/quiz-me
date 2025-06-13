import { useNavigate } from "react-router-dom";

export default function Form({ setCategory, setDifficulty, setType }) {
  const navigate = useNavigate();

  function getQuestion(e) {
    e.preventDefault();
    setCategory(e.target.category.value);
    setDifficulty(e.target.difficulty.value);
    setType(e.target.type.value);
    navigate("/question");
  }
  return (
    <div className="Form">
      <form onSubmit={getQuestion}>
        <br />
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
        <br />
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
        <br />
        <label>
          <span className="questions">Select Type</span>
          <br />
          <select className="type" name="type" id="type">
            <option value="">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </label>
        <br />
        <button className="getQuestion" type="submit">
          Get Question
        </button>
      </form>
    </div>
  );
}
