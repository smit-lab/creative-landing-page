import { useState } from "react";
import logo from "../assets/desktop/logo.svg";
import cross from "../assets/mobile/icon-cross.svg";
import hamburger from "../assets/mobile/icon-hamburger.svg";
import styles from "../components/css/nav.module.css";
import Button from "./ui/Button";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const buttonClickHandler = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className={`${styles.navWrapper} commissioner regular}`}>
      <img src={logo} alt="Creative brand logo" />
      <button onClick={buttonClickHandler}>
        {navOpen ? <img src={cross} alt="" /> : <img src={hamburger} alt="" />}
      </button>
      <nav
        className={`${styles.navItemsWrapper} ${
          navOpen ? styles.navItemsOpened : styles.navItemsClosed
        }`}
      >
        <ul className={styles.navItemContainer}>
          <li>About</li>
          <li>Service</li>
          <li>Projects</li>
        </ul>
        <Button text={"Schedule a Call"} btnType={"Secondary"} />
      </nav>
    </div>
  );
}

export default Nav;
