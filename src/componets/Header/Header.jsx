import "../../assets/styles/Header.css";
const Header = ({ score, selection }) => {
  return (
    <>
      <header className="container_header">
        <section className="selection barlow-semi-condensed-semibold">
          <h2
            style={{
              color: selection === "Rock" ? "rgba(255, 255, 255, 0.2)" : "",
            }}
          >
            ROCK
          </h2>
          <h2
            style={{
              color: selection === "Paper" ? "rgba(255, 255, 255, 0.2)" : "",
            }}
          >
            PAPER
          </h2>
          <h2
            style={{
              color: selection === "Scissor" ? "rgba(255, 255, 255, 0.2)" : "",
            }}
          >
            SCISSORS
          </h2>
        </section>
        <section className="score barlow-semi-condensed-bold ">
          <p>score</p>
          <h5>{score}</h5>
        </section>
      </header>
    </>
  );
};

export default Header;
