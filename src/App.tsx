import { useState } from "react";
import "./App.css";

const phrases = [
  "Hello",
  "World",
  "Test",
  "Test2",
  "Test3",
  "Test4",
  "Test5",
  "Test6",
  "Test7",
  "Test8",
  "Test9",
  "Test10",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="centered-container" style={{ backgroundColor: "	#FFD580" }}>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <iframe
              src="https://giphy.com/embed/JyTWSr1HdmUPaaLGv6"
              width="480"
              height="270"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>

            <div className="text-container">
              <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                Have a great day Woman!
              </span>
            </div>
          </>
        ) : (
          <>
            <iframe
              src="https://giphy.com/embed/TTr3zADf3SiaLQJtcg"
              width="480"
              height="480"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            <h1 className="text-container">Do you accept these flower?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
