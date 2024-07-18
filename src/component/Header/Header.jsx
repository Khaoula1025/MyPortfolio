import React from "react";
import "./Header.css";
import Toggle from "../toggle/Toggle";
export default function Header(props) {
  return (
    <>
      <nav>
        <div>
          <img src="/images/PersonalLogo.png" alt="Logo" />
        </div>
        <ul>
          <div className="linksContainer">
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
            <Toggle setClassName={props.setClassName} />
          </div>
        </ul>
      </nav>
    </>
  );
}
