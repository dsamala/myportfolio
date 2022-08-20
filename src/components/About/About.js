import React from 'react'
import { aboutData } from '../../data/aboutData';

const About = () => {
  return (
    <div>
      <div className="about-body">
        <h3>{aboutData.title}</h3>
        <h4>{aboutData.description1}</h4>
        <h4>{aboutData.description2}</h4>
      </div>

    </div>
  )
}

export default About;