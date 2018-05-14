import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
