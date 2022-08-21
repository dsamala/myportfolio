import html from "../assets/svg/html.svg";
import css from "../assets/svg/css.svg";
import javascript from "../assets/svg/javascript.svg";
import postgresql from "../assets/svg/postgresql.svg";
import python from "../assets/svg/python.svg";
import react from "../assets/svg/react.svg";
import django from "../assets/svg/django.svg";
import node from "../assets/svg/nodejs.svg";
import mongo from "../assets/svg/mongodb.svg";
import express from "../assets/svg/express.svg";


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'postgresql':
            return postgresql;
        case 'python':
            return python;
        case 'reactjs':
            return react;
        case 'express':
            return express;
        case 'django':
            return django;
        case 'node':
            return node;
        case 'mongodb':
            return mongo;
        default:
            break;
    }
}