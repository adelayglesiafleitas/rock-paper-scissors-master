import Rules from "../../assets/images/image-rules.svg";
import "../../assets/styles/WindowsRules.css";

const WindowsRule = ({ setWindowsRule }) => {
  return (
    <>
      <section className="container__rules">
        <h2 className="barlow-semi-condensed-semibold">RULES</h2>
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
