import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-intro">
        <div className="footer-info">
          <h2 className="footer-name">Esioudi Khaoula</h2>
          <p>
            full stack web developer
            <br />
            Your vision, my code: Let's create something amazing
          </p>
        </div>
        <div className="social-section">
          <h2>My Social</h2>
          <section className="socials">
            <div className="footer-social">
              <a href="#" className="home-social-link">
                <img
                  src="./svg/linkedin-icon.svg"
                  alt=""
                  className="home-social-icon"
                />
              </a>
            </div>
            <div className="footer-social">
              <a href="#" className="home-social-link">
                <img
                  src="./svg/github.svg"
                  alt=""
                  className="home-social-icon"
                />
              </a>
            </div>
            <div className="footer-social">
              <a href="#" className="home-social-link">
                <img
                  src="./svg/twitter.svg"
                  alt=""
                  className="home-social-icon"
                />
              </a>
            </div>
          </section>
        </div>
      </div>
      <div className="scroll-up-container">
        <button className="scroll-up">
          <img src="./svg/arrow-up.svg" alt="Scroll up" />
        </button>
      </div>
      <p className="copyright-section">
        &copy; 2024 Esioudi Khaoula. All rights reserved.
      </p>
    </footer>
  );
}
