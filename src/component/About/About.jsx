import React from "react";
import "./About.css";
import jsIcon from "/svg/javascript-logo.svg";
import cssIcon from "/svg/css-logo.svg";
import htmlIcon from "/svg/html-logo.svg";
import laravelIcon from "/svg/laravel-logo.svg";
import reactIcon from "/svg/react-logo.svg";
import vscodeIcon from "/svg/vscode-logo.svg";
import mongodbIcon from "/svg/mongodb-logo.svg";
import mysqlIcon from "/svg/mysql-logo.svg";
import bootstrapIcon from "/svg/bootstrap-icon.svg";
import tailwindIcon from "/svg/tailwind-logo.svg";
import gitIcon from "/svg/git-logo.svg";
import githubIcon from "/svg/github-logo.svg";
import Skill from "../Cards/Skill";
export default function About() {
  const SkillsAndTools = [
    { name: "Javascript", icon: jsIcon },
    { name: "Html", icon: htmlIcon },
    { name: "Css", icon: cssIcon },
    { name: "React", icon: reactIcon },
    { name: "Laravel", icon: laravelIcon },
    { name: "Mongodb", icon: mongodbIcon },
    { name: "Mysql", icon: mysqlIcon },
    { name: "BootStrap", icon: bootstrapIcon },
    { name: "Tailwind", icon: tailwindIcon },
    { name: "Git", icon: gitIcon },
    { name: "Github", icon: githubIcon },
    { name: "VsCode", icon: vscodeIcon },
  ];

  return (
    <section className="about-section">
      <h1>About me</h1>
      <div className="about-info">
        <p className="about-intro">
          Welcome to my portfolio! I'm Esioudi Khaoula, a junior full stack web
          developer.My journey into web development began with a love for
          problem-solving and creating beautiful, functional designs. I have
          hands-on experience in building responsive and interactive websites
          using HTML, CSS, JavaScript, and popular frameworks like React.
          Additionally, I have knowledge in backend technologies such as Laravel
          and database management. I am passionate about coding and dedicated to
          continuous learning to stay updated with the latest industry trends.
          I'm excited to embark on my professional journey and contribute to
          impactful web projects.
        </p>
        <div className="illustration-container">
          <img src="/images/workingPerson.png" alt="workingPerson" />
        </div>
      </div>
      <div className="myskills">
        <h1>Skills and Tools</h1>
        <div className="myskills-container">
          {SkillsAndTools.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
