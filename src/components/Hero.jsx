import heroImage from "../assets/desktop/image-hero.jpg";
import Button from "./ui/Button";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-heading commissioner-extrabold">
          Branding & website design agency
        </h1>
        <p className="hero-para commissioner-regular">
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <Button text={"Learn More"} btnType={"primary"} />
      </div>
      <img src={heroImage} alt="" className="hero-image" />
    </div>
  );
}

export default Hero;
