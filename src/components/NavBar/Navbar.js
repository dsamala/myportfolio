import React from 'react'
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
            <div class="logo">
              <h1>DS</h1>
            </div>
            <div className="menu-items">
                <li><NavLink to="/#skills" smooth={true} spy='true' duration={2000}>Skills</NavLink></li>
                <li><NavLink to="/#projects" smooth={true} spy='true' duration={2000}>Projects</NavLink></li>
            </div>
        </div>
    </div>
  )
}

