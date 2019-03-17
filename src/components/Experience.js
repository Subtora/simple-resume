import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <section className="Experience">
        <h1 className="topic">Experience</h1>
        <div className="right">
          <div className="job-nodes">
            <h2 className="location">
              <bold>Target</bold>, Centerville, Utah
            </h2>
            <h3 className="job-title">
              Electronic's Team Member, July 2017 - Present
            </h3>
            <p className="summary">
              Oversaw both sales floor operations and backroom functions.
              Manager of all new trainees within the electronics department and
              several other areas.
            </p>
          </div>
          <hr className="rule" />
          <div className="job-nodes">
            <h2 className="location">
              <bold>Colorado Mesa University</bold>, Grand Junction, Colorado
            </h2>
            <h3 className="job-title">Life Guard, August 2016 - April 2017</h3>
            <p className="summary">
              Supervised El Pomar Natorium and its patrons.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Experience;
