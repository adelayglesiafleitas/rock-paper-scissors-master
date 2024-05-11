import "../../assets/styles/Rules.css";

const Rules = ({ stateGame, setDisplay, display, setWindowsRule }) => {
  console.log(display);
  return (
    <>
      <div
        className="container_text"
        style={{ opacity: display ? "100%" : "0%" }}
      >
        <h2
          className="barlow-semi-condensed-bold "
          style={{ transform: display == 0 ? "translatex(-1550px)" : "" }}
        >
          {stateGame === "lost"
            ? "YOU LOSE"
            : stateGame === "win"
            ? "YOU WIN"
            : "A TIE"}
        </h2>
        <button
          className="barlow-semi-condensed-bold"
          style={{ transform: display == 0 ? "translatex(-1550px)" : "" }}
          onClick={() => (display == 1 ? setDisplay(0) : "")}
        >
          PLAY AGAIN
        </button>
      </div>
      <div className="rules_button">
        <button>
          <h3
            className="barlow-semi-condensed-semibold rules_button"
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
