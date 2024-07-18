import React from "react";

export default function Skill({ skill }) {
  return (
    <div className="skill">
      <img className="skill-icon" src={skill.icon} alt={skill.name} />
      <h4>{skill.name}</h4>
    </div>
  );
}
