import React from "react";
import "../../assets/styles/Button.css";

const Button = ({
  style,
  selection,
  setSelection,
  setScore,
  score,
  icon,
  tipe,
  stateGame,
  setStateGame,
  pcSelection,
  setPcSelection,
  setDisplay,
}) => {
  const numberRandom = () => {
    return Math.floor(Math.random() * 11);
  };

  const chousePc = () => {
    const Pc = numberRandom();
    if (Pc >= 3.33 && Pc < 6.7) {
      setPcSelection("scissors");
      return "scissors";
    } else if (Pc >= 6.7) {
      setPcSelection("rock");
      return "rock";
    } else {
      setPcSelection("paper");
      return "paper";
    }
  };

  const game = (tipe) => {
    const Pc = chousePc();

    if (tipe === "paper") {
      setSelection("paper");

      if (Pc === "paper") {
        setStateGame("a tie");
      } else if (Pc === "scissors") {
        setScore(score - 1);
        setStateGame("lost");
      } else {
        setScore(score + 1);
        setStateGame("win");
      }
    } else if (tipe === "scissors") {
      setSelection("scissors");

      if (Pc === "paper") {
        setScore(score + 1);
        setStateGame("win");
      } else if (Pc === "scissors") {
        setStateGame("a tie");
      } else {
        setScore(score - 1);
        setStateGame("lost");
      }
    } else if (tipe === "rock") {
      setSelection("rock");

      if (Pc === "paper") {
        setScore(score - 1);
        setStateGame("lost");
      } else if (Pc === "scissors") {
        setScore(score + 1);
        setStateGame("win");
      } else {
        setStateGame("a tie");
      }
    }
    setDisplay(1);
  };

  return (
    <>
      <section className="container_button" style={style}>
        <button className="button" onClick={() => game(tipe)}>
          <img src={icon} alt="icon" />
        </button>
      </section>
    </>
  );
};

export default Button;
