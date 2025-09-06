import iconReaction from "./assets/images/icon-reaction.svg";
import iconMemory from "./assets/images/icon-memory.svg";
import iconVerbal from "./assets/images/icon-verbal.svg";
import iconVisual from "./assets/images/icon-visual.svg";
import data from "./data.json";

const iconMap = {
  Reaction: iconReaction,
  Memory: iconMemory,
  Verbal: iconVerbal,
  Visual: iconVisual,
};

export default function App() {
  return (
    <div className="container">
      <div className="results-section">
        <div className="results-content">
          <h1>Your result</h1>
          <div className="score-container">
            <p className="big-score">76</p>
            <p className="out-of-score">of 100</p>
          </div>
          <div className="feedback-container">
            <h3>Great</h3>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
      </div>
      <div className="summary-section">
        <h3>Summary</h3>
        {data.map((item) => (
          <div className="summary-content-card" key={item.category}>
            <div className="summary-title">
              <img src={iconMap[item.category]} alt={`${item.category} icon`} />
              <p className={`${item.category.toLowerCase()}-text`}>
                {item.category}
              </p>
            </div>
            <div className="summary-score">
              <p>
                {item.score} / <span>100</span>
              </p>
            </div>
          </div>
        ))}
        <button>Continue</button>
      </div>
    </div>
  );
}
