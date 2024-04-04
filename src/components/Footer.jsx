import bgPatterRed from "../assets/desktop/bg-pattern-wave-red.svg";
import Button from "./ui/Button";

function Footer() {
  return (
    <footer className="footer">
      <img src={bgPatterRed} alt="" className="footer-bg-pattern" />
      <h1 className="footer-heading commissioner-extrabold">
        Let&apos;s build something
        <br /> great together.
      </h1>
      <Button text={"Schedule a Call"} btnType={"primary"} />
    </footer>
  );
}

export default Footer;
