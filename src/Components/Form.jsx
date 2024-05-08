import { useNavigate } from "react-router-dom";

export default function Form({ setCategory, setDifficulty, setType }) {

    const navigate = useNavigate()

    function getQuestion(e) {
        e.preventDefault()
        setCategory(e.target.category.value)
        setDifficulty(e.target.difficulty.value)
        setType(e.target.type.value)
        navigate("/triviagame")
    }
    return (
        <div>
            <form onSubmit={getQuestion}>
                <br />
                <label><span className="questions">Select Category</span>
                <br />
                    <select className="category" name="category" id="category">
                        <option value="">Any Category</option>
                        <option value="&category=9">General Knowledge</option>
                        <option value="&category=10">Entertainment: Books</option>
                        <option value="&category=29">Entertainment: Comics</option>
                        <option value="&category=11">Entertainment: Film</option>
                        <option value="&category=12">Entertainment: Music</option>
                        <option value="&category=13">Entertainment: Musical & Theatres</option>
                        <option value="&category=14">Entertainment: Television</option>
                        <option value="&category=15">Entertainment: Video Games</option>
                        <option value="&category=16">Entertainment: Board Games</option>
                        <option value="&category=31">Entertainment: Japanese Anime & Manga</option>
                        <option value="&category=32">Entertainment: Cartoon & Animations</option>
                        <option value="&category=17">Science & Nature</option>
                        <option value="&category=18">Science: Computers</option>
                        <option value="&category=30">Science: Gadgets</option>
                        <option value="&category=19">Science: Mathematics</option>
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
                <label><span className="questions">Select Difficulty</span>
                 <br/>
                    <select className="difficulty" name="difficulty" id="difficulty">
                        <option value="">Any Difficulty</option>
                        <option value="&difficulty=easy">Easy</option>
                        <option value="&difficulty=medium">Medium</option>
                        <option value="&difficulty=hard">Hard</option>
                    </select>
                </label>
                <br />
                <label><span className="questions">Select Type</span>
                <br/>
                <select className="type" name="type" id="type">
                    <option value="">Any Type</option>
                    <option value="&type=multiple">Multiple Choice</option>
                    <option value="&type=boolean">True / False</option>
                </select>
                </label>
                <br />
                <button className="getQuestion" type="submit">Get Question</button>
            </form>
        </div>
    );
}