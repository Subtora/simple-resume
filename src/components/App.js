import React, { Component } from "react";
import Top from "./Top";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import "../styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Mounted App");
  }
  render() {
    return (
      <section className="body">
        <Top />
        <div className="rule" />
        <Education />
        <div className="rule" />
        <Experience />
        <div className="rule" />
        <Projects />
        <div className="rule" />
      </section>
    );
  }
}

export default App;
