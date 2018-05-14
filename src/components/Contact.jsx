import React, { Component } from "react";
// import {Link, Route, Switch } from 'react-router-dom'

const Contact = () => {
  return (
    <div id="contact-page" className="contact-background">
      <div id="contact-left-card" className='left-card'>
        <h1 className='left-card-intro'> Contact </h1>
        <h3 className='contact-nav'>
        <a className='contact-nav-links' href='#aboutme-page'>About Me </a> {''} / {''}
            <a className='contact-nav-links'  href='#projects-page'>Projects</a>{''} / {''}
            <a className='contact-nav-links'  href ='#skills-page'>Skills</a>{''} / {''}
            <a className='contact-nav-links' href='#contact-page'>Contact</a>{''} / {''}
            </h3>  
      </div>
     
      <div id='contact-right-card'className='right-card'>
        <p> CONTACT MEEEEE</p>
      </div>
    </div>
  );
};

export default Contact;