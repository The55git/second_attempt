import { useState } from "react";
import "./App.css";

const phrases = [
  "please",
  "pleasee",
  "Please take them",
  "pretty people",
  "Reminder that you are EPIC",
  "Bad woman",
  "just accept the damn flower :(",
  "the goofy lil dog is wating for you",
  "🌸🌺💮",
  "🌹",
  "💐(^ω^ )",
  "🥀 the flower died 🥀",
  "If you aint taking the flower, at least have a hug (づ ᴗ _ᴗ)づ♡",
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
              className="giphy-embed"
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
              className="giphy-embed"
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
