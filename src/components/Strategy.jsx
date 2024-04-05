import bgPatterRed from "../assets/desktop/bg-pattern-wave-red.svg";
import imageStrategic from "../assets/desktop/image-strategic.jpg";
import imageStrategicTablet from "../assets/tablet/image-strategic-tablet.jpg";
import imageStrategicMobile from "../assets/mobile/image-strategic-mobile.jpg";
import Button from "./ui/Button";

function Strategy() {
  return (
    <div className="strategy-container">
      <img src={bgPatterRed} alt="" className="bg-pattern" />

      <picture>
        <source media="(min-width: 1024px)" srcSet={imageStrategic} />
        <source media="(min-width: 500px)" srcSet={imageStrategicTablet} />
        <source media="(max-width: 500px)" srcSet={imageStrategicMobile} />
        <img src={imageStrategic} alt="" className="strategy-image" />
      </picture>

      <div className="strategy-text">
        <h1 className="strategy-heading commissioner extrabold">
          <span>Design</span> is <br /> strategic.
        </h1>
        <p className="strategy-para commissioner regular">
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
