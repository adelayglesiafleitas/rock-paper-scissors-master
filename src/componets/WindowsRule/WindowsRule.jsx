import Rules from "../../assets/images/image-rules.svg";
import "../../assets/styles/WindowsRules.css";

const WindowsRule = ({ setWindowsRule }) => {
  return (
    <>
      <section className="container__rules animate__animated animate__pulse">
        <h2 className="barlow-semi-condensed-semibold animate__animated animate__flip">RULES</h2>
        <img src={Rules} alt="" />
        <button
          onClick={() => {
            setWindowsRule(true);
          }}
        >
          X
        </button>
      </section>
    </>
  );
};

export default WindowsRule;
