import React from 'react';
import Marquee from 'react-fast-marquee';
import "./Skills.css";

import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage"

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skillsHeader">
        <h2>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div classname="skill-scroll">
          <Marquee
              gradient={false} 
              speed={80} 
              pauseOnHover={true}
              pauseOnClick={true} 
              delay={0}
              play={true} 
              direction="left"
            >
              {skillsData.map((skill, id) => (
                <div className="skill-box" key={id}>
                  <img src={skillsImage(skill)} alt={skill} />
                  <h3>{skill}</h3>
                </div>
              ))}
          </Marquee>
        </div>

      </div>
    </div>
  )
}
