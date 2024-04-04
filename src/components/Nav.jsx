import logo from "../assets/desktop/logo.svg";
import Button from "./ui/Button";

function Nav() {
  return (
    <div className="nav-wrapper commissioner-regular">
      <img src={logo} alt="Creative brand logo" />
      <nav className="nav-items-wrapper">
        <ul className="nav-item-container">
          <li>About</li>
          <li>Service</li>
          <li>Projects</li>
        </ul>
        <Button text={"Schedule a Call"} btnType={"secondary"} />
      </nav>
    </div>
  );
}

export default Nav;
