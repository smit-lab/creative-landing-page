import logo from "../assets/desktop/logo.svg";
import Button from "./ui/Button";
import styles from "../components/css/nav.module.css";

function Nav() {
  return (
    <div className={`${styles.navWrapper} commissioner regular}`}>
      <img src={logo} alt="Creative brand logo" />
      <nav className={styles.navItemsWrapper}>
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
