import React from "react";
import { FaPlay, FaCode } from "react-icons/fa";
import placeholder from "../../../assets/png/placeholder.png";
import './ProjectCard.css';


export default function ProjectCard(id, projectName, projectDesc, projectImage, code, demo ) {
  return (
    <div className="projectCard" key={id}>
        <div className="projectContent">
            <h2 id={id}>
                {projectName}
            </h2>
            <img src={ projectImage ? projectImage : placeholder} alt={projectName} /> 
            <div className="project-link-btn">
                <a href={demo} target="_blank" rel="noreferrer">
                    <FaPlay 
                        id={id}
                    />
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                    <FaCode 
                        id={id}
                    />
                </a>
                <p className="project-desc">
                    {projectDesc}
                </p>
            </div>
        </div>
    </div>
  )
}

