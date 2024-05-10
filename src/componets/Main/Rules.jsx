import "../../assets/styles/Rules.css";

const Rules = ({ stateGame, setDisplay, display, setWindowsRule }) => {
  console.log(display);
  return (
    <>
      <div
        className="container_text"
        style={{ opacity: display ? "100%" : "0%" }}
      >
        <h2 className="barlow-semi-condensed-bold">
          {stateGame === "lost"
            ? "YOU LOSE"
            : stateGame === "win"
            ? "YOU WIN"
            : "A TIE"}
        </h2>
        <button
          className="barlow-semi-condensed-bold"
          onClick={() => setDisplay(0)}
        >
          PLAY AGAIN
        </button>
      </div>
      <div>
        <button>
          <h3
            className="barlow-semi-condensed-semibold"
            onClick={() => {
              setWindowsRule(false);
            }}
          >
            RULES
          </h3>
        </button>
      </div>
    </>
  );
};

export default Rules;
