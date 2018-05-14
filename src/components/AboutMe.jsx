import React, { Component } from "react";
// import {Link, Route, Switch } from 'react-router-dom'

const AboutMe = () => {
  return (
    <div id="aboutme-page" className="aboutme-background">
      <div id="aboutme-left-card"className='left-card'>
        <h1 className='left-card-intro'> About Me </h1>
        <h3 className='aboutme-nav'>
        <a className='aboutme-nav-links' href='#aboutme-page'>About Me </a> {''} / {''}
            <a className='aboutme-nav-links'  href='#projects-page'>Projects</a>{''} / {''}
            <a className='aboutme-nav-links'  href ='#skills-page'>Skills</a>{''} / {''}
            <a className='aboutme-nav-links' href='#contact-page'>Contact</a>{''} / {''}
            </h3>  
      </div>
      {/* <div>
        <img src="" alt="dori-picture" id="dori-picture" />
      </div> */}
      <div id='aboutme-right-card' className='right-card'>
        <p> hi my name is dori! </p>
      </div>
    </div>
  );
};

export default AboutMe;
