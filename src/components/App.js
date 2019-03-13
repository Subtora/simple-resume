import React, { Component } from "react";

import "../styles/App.scss";

class App extends Component {
  render() {
    return (
      <section className="body">
        <header className="top">
          <h1 className="name">Trevor J Smith</h1>
          <p className="contact right">
            Centerville, UT 84014 <br />
            (801) 882-5018 <br />
            trevorsmith4@mail.weber.edu
          </p>
        </header>
        <hr className="rule" />
        <section className="content">
          <h1 className="topic">Education</h1>
          <div className="right">
            <p>May 2020 - BS in Computer Science, Weber State University</p>
            <div className="courses">
              <h2>Completed Courses:</h2>
              <ul className="course-list">
                <li>CS1022: Foundations of Computing</li>
                <li>
                  CS1030: Fundamentals of Programming
                  <span className="languages"> C++</span>
                </li>
                <li>
                  CS1410: Object-Oriented Programming
                  <span className="languages">C/C++</span>
                </li>
                <li>
                  CS2350: Client Side Web Development
                  <span className="languages"> HTML</span>
                  <span className="languages"> CSS</span>
                  <span className="languages"> Javascript</span>
                </li>
                <li>
                  CS2420: Data Structures & Algorithms
                  <span className="languages"> Java</span>
                </li>
                <li>
                  CS2550: Intro to Database Design & SQL
                  <span className="languages"> Oracle SQL</span>
                </li>
              </ul>
              <p className="gpa">GPA: 3.7</p>
            </div>
          </div>
        </section>
        <hr className="rule" />
        <section className="content">
          <h1 className="topic">Experience</h1>
          <div className="right">
            <div className="jobs">
              <h2 className="location">
                <bold>Target</bold>, Centerville, Utah
              </h2>
              <h3 className="job-title">
                Electronic's Team Member, July 2017 - Present
              </h3>
              <p className="summary">
                Oversaw both sales floor operations and backroom functions.
                Manager of all new tranees within the electronics department and
                several other areas.
              </p>
            </div>
            <div className="jobs">
              <h2 className="location">
                <bold>Colorado Mesa University</bold>, Grand Junction, Colorado
              </h2>
              <h3 className="job-title">
                Life Guard, August 2016 - April 2017
              </h3>
              <p className="summary">
                Supervised El Pomar Natorium and its patrons.
              </p>
            </div>
          </div>
        </section>
        <hr className="rule" />
        <section className="content">
          <h1 className="topic">Projects</h1>
          <div className="projects">
            <div className="right">
              <div className="projects">
                <h2 className="title">
                  Personal Website -
                  <a href="https://trevorjs.dev/" target="_blank">
                    trevorjs.dev
                  </a>
                  <span className="in-progress">in progress</span>
                </h2>
                <div className="horizontal-list">
                  <span className="languages">HTML</span>
                  <span className="languages">Scss</span>
                  <span className="languages">Javascript</span>
                  <span className="languages">React</span>
                </div>
                <p className="description">
                  A website-resume for displaying relevent projects I have done
                  and my educational standing.
                </p>
                <hr className="rule" />
              </div>
              <div className="projects">
                <h2 className="title">
                  When To Wake Up -
                  <a href="https://whentowakeup.com" target="_blank">
                    whentowakeup.com
                  </a>
                  <span className="in-progress">in progress</span>
                </h2>
                <div className="horizontal-list">
                  <span className="languages">HTML</span>
                  <span className="languages">Scss</span>
                  <span className="languages">Javascript</span>
                  <span className="languages">React</span>
                </div>
                <p className="description">
                  A visually pleasing sleep-cycle calculator that displays
                  several optimal times that you should wake up to feel rested.
                </p>
                <hr className="rule" />
              </div>
              <div className="projects">
                <h2 className="title">
                  Game of Life -
                  <a
                    href="https://subtora.github.io/game-of-life/"
                    target="_blank"
                  >
                    subtora.github.io/game-of-life
                  </a>
                </h2>
                <div className="horizontal-list">
                  <span className="languages">HTML</span>
                  <span className="languages">Scss</span>
                  <span className="languages">Javascript</span>
                  <span className="languages">React</span>
                </div>
                <p className="description">
                  A simple remake of Conway's Game of life using React.
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className="rule" />
      </section>
    );
  }
}

export default App;
