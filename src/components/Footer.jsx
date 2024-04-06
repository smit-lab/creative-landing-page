import bgPatterRed from "../assets/desktop/bg-pattern-wave-red.svg";
import styles from "../components/css/footer.module.css";
import Button from "./ui/Button";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={bgPatterRed} alt="" className={styles.footerBgPattern} />
      <h1 className={`${styles.footerHeading} commissioner extrabold`}>
        Let&apos;s build something
        <br /> great together.
      </h1>
      <Button text={"Schedule a Call"} btnType={"Primary"} />
    </footer>
  );
}

export default Footer;
