import heroImage from "../assets/desktop/image-hero.jpg";
import heroImageTablet from "../assets/tablet/image-hero-tablet.jpg";
import heroImageMobile from "../assets/mobile/image-hero-mobile.jpg";
import Button from "./ui/Button";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-heading commissioner extrabold">
          Branding & website design agency
        </h1>
        <p className="hero-para commissioner regular">
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <Button text={"Learn More"} btnType={"primary"} />
      </div>

      <picture>
        <source media="(min-width: 1024px)" srcSet={heroImage} />
        <source media="(min-width: 500px)" srcSet={heroImageTablet} />
        <source media="(max-width: 500px)" srcSet={heroImageMobile} />
        <img src={heroImage} alt="" className="hero-image" />
      </picture>
    </div>
  );
}

export default Hero;
