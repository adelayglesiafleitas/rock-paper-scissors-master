import "./assets/styles/App.css";
import Header from "./componets/Header/Header.jsx";
import Main from "./componets/Main/Main.jsx";
import Footer from "./componets/Footer/Footer.jsx";
import { useState } from "react";
import WindowsRule from "./componets/WindowsRule/WindowsRule.jsx";

const App = () => {
  const [score, setScore] = useState(0);
  const [selection, setSelection] = useState("");
  const [stateGame, setStateGame] = useState("");
  const [pcSelection, setPcSelection] = useState("");
  const [windowsRule, setWindowsRule] = useState(true);

  return (
    <>
      {windowsRule ? (
        <>
          <Header selection={selection} score={score} />
          <Main
            selection={selection}
            setSelection={setSelection}
            score={score}
            setScore={setScore}
            stateGame={stateGame}
            setStateGame={setStateGame}
            pcSelection={pcSelection}
            setPcSelection={setPcSelection}
            setWindowsRule={setWindowsRule}
          />
          <Footer />
        </>
      ) : (
        <WindowsRule setWindowsRule={setWindowsRule} />
      )}
    </>
  );
};

export default App;
