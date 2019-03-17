import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <section className="Education">
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
    );
  }
}
export default Education;
