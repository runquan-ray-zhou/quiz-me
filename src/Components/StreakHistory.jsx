import { useNavigate } from "react-router-dom";

// Helper function to decode HTML entities
const decodeHtmlEntities = (text) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

export default function StreakHistory({ streakHistory }) {
  const navigate = useNavigate();

  return (
    <div className="StreakHistory">
      <h2>Your Current Streak History</h2>
      
      {streakHistory.length === 0 ? (
        <p>No questions answered correctly in this streak yet!</p>
      ) : (
        streakHistory.map((item, index) => (
          <div key={index} className="StreakHistory__item" style={{ marginBottom: "15px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
            <p><strong>Q{index + 1}:</strong> {decodeHtmlEntities(item.question)}</p>
            <p style={{ color: "green" }}><strong>Answer:</strong> {decodeHtmlEntities(item.correct_answer)}</p>
          </div>
        ))
      )}

      <br />
      {/* Goes back one step in the browser history (to the question or form they came from) */}
      <button className="StreakHistory__back-btn" onClick={() => navigate(-1)}>
        Back to Game
      </button>
    </div>
  );
}