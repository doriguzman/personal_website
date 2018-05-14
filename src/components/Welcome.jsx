import React, { Component } from "react";
// import {Link, Route, Switch } from 'react-router-dom'



class Welcome extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'text hidden'
        }
    }


    componentDidMount(){
        console.log(this.state)
        setTimeout(() => {
            this.setState({ displayName: 'text' });
          }, 1500);
          console.log(this.state)
    }

    
render(){
const {displayName}=this.state
console.log(this.state)

  return (
    <div id="welcome-page">
      <h3 id="welcome-occupation"> Fullstack Web Developer</h3>

      <div id="welcome-middle">
        <ul className={displayName}>
          <li>D</li>
          <li className="ghost">o</li>
          <li className="ghost">r</li>
          <li className="ghost">i</li>
          <li className="ghost">a</li>
          <li className="ghost">n</li>

          <li className="spaced">G</li>
          <li className="ghost">u</li>
          <li className="ghost">z</li>
          <li className="ghost">m</li>
          <li className="ghost">a</li>
          <li className="ghost">n</li>
        </ul>
      </div>

      <h3 id="main-nav">
        <a className="main-nav-links" href="#aboutme-page">
          About Me{" "}
        </a>{" "}
        {""} / {""}
        <a className="main-nav-links" href="#projects-page">
          Projects
        </a>
        {""} / {""}
        <a className="main-nav-links" href="#skills-page">
          Skills
        </a>
        {""} / {""}
        <a className="main-nav-links" href="#contact-page">
          Contact
        </a>
        {""} / {""}
      </h3>
    </div>
  );
};
}

export default Welcome;
