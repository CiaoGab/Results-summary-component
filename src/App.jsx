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
        <div className="summary-content-card">
          <div className="summary-title">
            <img
              src="src\assets\images\icon-reaction.svg"
              alt="reaction icon thunderbolt"
            />
            <p className="reaction-text">Reaction</p>
          </div>
          <div className="summary-score">
            <p>
              80 / <span>100</span>
            </p>
          </div>
        </div>
        <div className="summary-content-card">
          <div className="summary-title">
            <img
              src="src\assets\images\icon-memory.svg"
              alt="reaction icon thunderbolt"
            />
            <p className="memory-text">Memory</p>
          </div>
          <div className="summary-score">
            <p>
              92 / <span>100</span>
            </p>
          </div>
        </div>
        <div className="summary-content-card">
          <div className="summary-title">
            <img
              src="src\assets\images\icon-verbal.svg"
              alt="reaction icon thunderbolt"
            />
            <p className="verbal-text">Verbal</p>
          </div>
          <div className="summary-score">
            <p>
              61 / <span>100</span>
            </p>
          </div>
        </div>
        <div className="summary-content-card">
          <div className="summary-title">
            <img
              src="src\assets\images\icon-visual.svg"
              alt="reaction icon thunderbolt"
            />
            <p className="visual-text">Visual</p>
          </div>
          <div className="summary-score">
            <p>
              73 / <span>100</span>
            </p>
          </div>
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
}
