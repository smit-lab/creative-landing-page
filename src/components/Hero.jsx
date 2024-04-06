import heroImage from "../assets/desktop/image-hero.jpg";
import heroImageMobile from "../assets/mobile/image-hero-mobile.jpg";
import heroImageTablet from "../assets/tablet/image-hero-tablet.jpg";
import styles from "../components/css/hero.module.css";
import Button from "./ui/Button";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroText}>
        <h1 className={`${styles.heroHeading} commissioner extrabold`}>
          Branding & website design agency
        </h1>
        <p className={`${styles.heroPara} commissioner regular`}>
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <Button text={"Learn More"} btnType={"Primary"} />
      </div>

      <picture>
        <source media="(min-width: 1024px)" srcSet={heroImage} />
        <source media="(min-width: 500px)" srcSet={heroImageTablet} />
        <source media="(max-width: 500px)" srcSet={heroImageMobile} />
        <img src={heroImage} alt="" className={styles.heroImage} />
      </picture>
    </div>
  );
}

export default Hero;
