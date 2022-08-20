import React from 'react'
import { headerData } from '../../data/headerData';
import { NavLink } from 'react-router-dom';
import "./Landing.css";
import { Button } from '@mui/material';


export default function Landing() {
  return (
    <div className="landing">
        <div className="landing-container">
            <div className="landing-container-left">
                <div className="lcl-content">

                </div>
            </div>
            <img 
                    src={headerData.image}
                    alt=''
                    className='landing-img'
                />
            <div className="landing-container-right">
                <div className="lcr-content">
                    <h6>{headerData.title}</h6>
                    <h1>{headerData.name}</h1>
                    <p>{headerData.description}</p>
                </div>
                <div className="lcr-buttoncontainer">
                    <a
                        href={headerData.resumePdf}
                        download='resume'
                        target='_blank'
                        rel='noreferrer'>
                            <Button className="resume">Download CV</Button>
                    </a>
                    <NavLink 
                        to="/#contacts"
                        smooth={true}
                        spy='true'
                        duration={2000}
                        >
                            <Button className="contact">Contact</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

