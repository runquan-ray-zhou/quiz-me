import { useNavigate } from "react-router-dom";

export default function Form({ setCategory, setDifficulty, setType }) {
  const navigate = useNavigate();

  function getQuestion(e) {
    e.preventDefault();
    setCategory(e.target.category.value);
    setDifficulty(e.target.difficulty.value);
    setType(e.target.type.value);
    navigate("/triviagame");
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
            <option value="&category=9">General Knowledge</option>
            <option value="&category=10">Books</option>
            <option value="&category=29">Comics</option>
            <option value="&category=11">Film</option>
            <option value="&category=12">Music</option>
            <option value="&category=13">Musical & Theatres</option>
            <option value="&category=14">Television</option>
            <option value="&category=15">Video Games</option>
            <option value="&category=16">Board Games</option>
            <option value="&category=31">Anime & Manga</option>
            <option value="&category=32">Cartoon & Animations</option>
            <option value="&category=17">Science & Nature</option>
            <option value="&category=18">Computers</option>
            <option value="&category=30">Gadgets</option>
            <option value="&category=19">Mathematics</option>
            <option value="&category=20">Mythology</option>
            <option value="&category=21">Sports</option>
            <option value="&category=22">Geography</option>
            <option value="&category=23">History</option>
            <option value="&category=24">Politics</option>
            <option value="&category=25">Art</option>
            <option value="&category=26">Celebrities</option>
            <option value="&category=27">Animals</option>
            <option value="&category=28">Vehicles</option>
          </select>
        </label>
        <br />
        <label>
          <span className="questions">Select Difficulty</span>
          <br />
          <select className="difficulty" name="difficulty" id="difficulty">
            <option value="">Any Difficulty</option>
            <option value="&difficulty=easy">Easy</option>
            <option value="&difficulty=medium">Medium</option>
            <option value="&difficulty=hard">Hard</option>
          </select>
        </label>
        <br />
        <label>
          <span className="questions">Select Type</span>
          <br />
          <select className="type" name="type" id="type">
            <option value="">Any Type</option>
            <option value="&type=multiple">Multiple Choice</option>
            <option value="&type=boolean">True / False</option>
          </select>
        </label>
        <br />
        <div className="getButtons">
          <button className="getQuestion" type="submit">
            Get Question
          </button>
          <button className="getQuestion" type="submit">
            Get Random Question
          </button>
        </div>
      </form>
    </div>
  );
}
