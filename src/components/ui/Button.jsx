/* eslint-disable react/prop-types */
import styles from "../css/ui/button.module.css";
function Button({ text, btnType }) {
  return (
    <a
      href="#"
      className={`${styles.btn} ${
        styles[`btn${btnType}`]
      } commissioner extrabold`}
    >
      {text}
    </a>
  );
}

export default Button;
