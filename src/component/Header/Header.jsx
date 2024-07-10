import React from "react";
import styles from "./Header.module.css";
import Toggle from "../toggle/Toggle";
export default function Header(props) {
  return (
    <>
      <nav className={styles.nav}>
        <div>
          <img src="/images/PersonalLogo.png" alt="Logo" />
        </div>
        <ul className={styles.ul}>
          <div className={styles.linksContainer}>
            <li>
              {" "}
              <a href="#">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">About</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Projects</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Contact</a>{" "}
            </li>
          </div>
        </ul>
        <Toggle setClassName={props.setClassName} />
      </nav>
    </>
  );
}
