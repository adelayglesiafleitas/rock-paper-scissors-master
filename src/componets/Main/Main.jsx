import "../../assets/styles/Main.css";
import Button from "../Main/Button.jsx";
import Rules from "../Main/Rules.jsx";
import Scissors from "../../assets/images/icon-scissors.svg";
import Rock from "../../assets/images/icon-rock.svg";
import Paper from "../../assets/images/icon-paper.svg";
import { useState } from "react";
const Main = ({
  selection,
  setSelection,
  score,
  setScore,
  stateGame,
  setStateGame,
  pcSelection,
  setPcSelection,
}) => {
  const [display, setDisplay] = useState(0);

  const stylePaper = {
    gridColumn: "1 / 2",
    gridRow: "1 / 2",
    transform: "translateX(10px)",
    backgroundImage:
      "radial-gradient(at center, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)",
  };

  const styleScissors = {
    gridColumn: "2 / 3",
    gridRow: "1 / 2",
    transform: "translateX(10px)",
    backgroundImage:
      "radial-gradient(at center, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)",
  };
  const styleRock = {
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
    transform: "translateX(-70px)",
    backgroundImage:
      "radial-gradient(at center, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)",
  };
  const styleRock2 = {
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
    backgroundImage:
      "radial-gradient(at center, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)",
  };

  return (
    <>
      <main className="container_main">
        {display == 0 ? (
          <section className="container_bottons">
            <Button
              style={stylePaper}
              icon={Paper}
              tipe={"paper"}
              selection={selection}
              setSelection={setSelection}
              setScore={setScore}
              score={score}
              stateGame={stateGame}
              setStateGame={setStateGame}
              pcSelection={pcSelection}
              setPcSelection={setPcSelection}
              setDisplay={setDisplay}
            />
            <Button
              style={styleScissors}
              icon={Scissors}
              tipe={"scissors"}
              selection={selection}
              setSelection={setSelection}
              setScore={setScore}
              score={score}
              stateGame={stateGame}
              setStateGame={setStateGame}
              pcSelection={pcSelection}
              setPcSelection={setPcSelection}
              setDisplay={setDisplay}
            />
            <Button
              style={styleRock}
              icon={Rock}
              tipe={"rock"}
              selection={selection}
              setSelection={setSelection}
              setScore={setScore}
              score={score}
              stateGame={stateGame}
              setStateGame={setStateGame}
              pcSelection={pcSelection}
              setPcSelection={setPcSelection}
              setDisplay={setDisplay}
            />
          </section>
        ) : (
          <section className="container_game">
            <div className="container_section_game">
              {" "}
              <section className="container_game_gamer">
                {selection === "scissors" ? (
                  <Button
                    style={styleScissors}
                    icon={Scissors}
                    tipe={"scissors"}
                  />
                ) : selection === "rock" ? (
                  <Button style={styleRock2} icon={Rock} tipe={"rock"} />
                ) : (
                  <Button style={stylePaper} icon={Paper} tipe={"paper"} />
                )}
                <h2 className="barlow-semi-condensed-semibold">YOU PICKED</h2>
              </section>
              <section className="container_game_gamer">
                {pcSelection === "scissors" ? (
                  <Button
                    style={styleScissors}
                    icon={Scissors}
                    tipe={"scissors"}
                  />
                ) : pcSelection === "rock" ? (
                  <Button style={styleRock2} icon={Rock} tipe={"rock"} />
                ) : (
                  <Button style={stylePaper} icon={Paper} tipe={"paper"} />
                )}
                <h2 className="barlow-semi-condensed-semibold">
                  THE HOUSE PICKED
                </h2>
              </section>
            </div>
            <section className="container_text">
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
            </section>
          </section>
        )}

        <section className="container_rules">
          <Rules />
        </section>
      </main>
    </>
  );
};

export default Main;
