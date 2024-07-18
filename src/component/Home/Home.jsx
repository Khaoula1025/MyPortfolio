import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1 className="home-title"> Hey, I'm Khaoula Esioudi</h1>
        <p className="home-description">
          As a passionate full-stack junior web developer, I create and manage
          dynamic websites and web applications that drive success. From
          front-end interfaces to back-end logic, I bring your ideas to life
          with innovative, user-centric solutions.
        </p>
        <button className="home-button">Learn more about me </button>
      </div>
      <div className="home-socials-container">
        <div className="home-social">
          <a href="#" className="home-social-link">
            <img
              src="./svg/linkedin-icon.svg"
              alt=""
              className="home-social-icon"
            />
          </a>
        </div>
        <div className="home-social">
          <a href="#" className="home-social-link">
            <img src="./svg/github.svg" alt="" className="home-social-icon" />
          </a>
        </div>
        <div className="home-social">
          <a href="#" className="home-social-link">
            <img src="./svg/twitter.svg" alt="" className="home-social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
