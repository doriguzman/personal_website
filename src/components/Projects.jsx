import React, { Component } from "react";
// import {Link, Route, Switch } from 'react-router-dom'

const Projects = () => {
  return (
    <div id="projects-page" className="projects-background">
      <div id="projects-left-card" className='left-card'>
        <h1 className='left-card-intro'> Projects </h1>
        <h3 className='projects-nav'>
        <a className='projects-nav-links' href='#aboutme-page'>About Me </a> {''} / {''}
            <a className='projects-nav-links'  href='#projects-page'>Projects</a>{''} / {''}
            <a className='projects-nav-links'  href ='#skills-page'>Skills</a>{''} / {''}
            <a className='projects-nav-links' href='#contact-page'>Contact</a>{''} / {''}
            </h3>  
      </div>
     
      <div id='projects-right-card' className='right-card'>
        <p> projects MEEEEE</p>
      </div>
    </div>
  );
};

export default Projects;