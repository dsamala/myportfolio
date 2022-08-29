import React from 'react'
import { socialsData } from '../../data/socialsData';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import "./Navbar.css";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <div class="socialmedia">
              {socialsData.linkedIn && (
                <a
                  href={socialsData.linkedIn}
                  target='_blank'
                  rel='noreferrer'
                  className='socialIcon'
                >
                  <FaLinkedinIn size={35} aria-label="LinkedIn"/>
                </a>
              )}
              {socialsData.github && (
                <a
                  href={socialsData.github}
                  target='_blank'
                  rel='noreferrer'
                  className='socialIcon'
                >
                  <FaGithub size={35} aria-label="Github"/>
                </a>
              )}
                <a
                  href="mailto:denzel.samala@gmail.com" className="mail"
                >
                  <MdEmail size={35}/>
                </a>

            </div>
            <div className="menu-items">
                <li><NavLink to="/#skills" smooth={true} spy='true' duration={2000}>Skills</NavLink></li>
                <li><NavLink to="/#projects" smooth={true} spy='true' duration={2000}>Projects</NavLink></li>
            </div>
        </div>
    </div>
  )
}

