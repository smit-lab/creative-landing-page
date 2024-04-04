import bgPatterRed from "../assets/desktop/bg-pattern-wave-red.svg";
import imageStrategic from "../assets/desktop/image-strategic.jpg";
import Button from "./ui/Button";

function Strategy() {
  return (
    <div className="strategy-container">
      <img src={bgPatterRed} alt="" className="bg-pattern" />
      <img src={imageStrategic} alt="" />
      <div className="strategy-text">
        <h1 className="strategy-heading commissioner-extrabold">
          <span>Design</span> is <br /> strategic.
        </h1>
        <p className="strategy-para commissioner-regular">
          “A well-crafted design strategy consistently produces desired outcomes
          and brand awareness. We are firm believers that success lies in
          creative collaboration with our clients.”
        </p>

        <Button text={"Schedule a Call"} btnType={"link"} />
      </div>
    </div>
  );
}

export default Strategy;
