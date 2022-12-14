import React from 'react';
import { projectsData } from "../../data/projectsData";
import { FaPlay, FaCode } from "react-icons/fa";
import placeholder from "../../assets/png/placeholder.png"
import './Projects.css';


export default function Projects() {
  return (
    <div>
      {projectsData.length > 0 && (
        <div className="projects" id="projects">
          <div className="projects-header">
            <h1>Projects</h1>
          </div>
          <div className="projects-body">
            <div className="projects-bodyContainer">
              {projectsData.map(project => (
                <div className="projectCard" key={project.id}>
                  <div className="projectContent">
                    <h2 id={project.id}>
                      {project.projectName}
                    </h2>
                    <img src={project.projectImage ? project.projectImage : placeholder} alt={project.projectName} />
                    <div className="project-link-btn">
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <FaPlay
                          id={project.id}
                          size={35}
                          color="black"
                        />
                      </a>
                      <a href={project.code} target="_blank" rel="noreferrer">
                        <FaCode
                          id={project.id}
                          size={35}
                          color="black"
                        />
                      </a>
                      <p className="project-desc">
                        {project.projectDesc}
                      </p>
                    </div>
                  </div>
                </div>



              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

