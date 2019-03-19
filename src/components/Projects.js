import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <section className="content">
        <h1 className="topic">Projects</h1>
        <div className="projects">
          <div className="right">
            <div className="project-nodes">
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
                <span className="languages">React.js</span>
                <span className="languages">Webpack</span>
              </div>
              <p className="description">
                A website-resume for displaying relevent projects I have done
                and my educational standing.
              </p>
              <div className="rule" />
            </div>
            <div className="project-nodes">
              <h2 className="title">
                When To Wake Up -
                <a href="https://whentowakeup.com" target="_blank">
                  whentowakeup.com
                </a>
              </h2>
              <div className="horizontal-list">
                <span className="languages">HTML</span>
                <span className="languages">Scss</span>
                <span className="languages">Javascript</span>
                <span className="languages">React.js</span>
                <span className="languages">Webpack</span>
              </div>
              <p className="description">
                A visually pleasing sleep-cycle calculator that displays several
                optimal times that you should wake up to feel rested.
              </p>
              <div className="rule" />
            </div>
            <div className="project-nodes">
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
                <span className="languages">React.js</span>
                <span className="languages">Webpack</span>
              </div>
              <p className="description">
                A simple remake of Conway's Game of life using React.
              </p>
            </div>
            <div className="rule" />
            <div className="project-nodes">
              <h2 className="title">
                Crypto Price Tracker -
                <a
                  href="https://subtora.github.io/crypto-price-tracker/"
                  target="_blank"
                >
                  subtora.github.io/crypto-price-tracker/
                </a>
              </h2>
              <div className="horizontal-list">
                <span className="languages">HTML</span>
                <span className="languages">Scss</span>
                <span className="languages">Javascript</span>
                <span className="languages">React.js</span>
                <span className="languages">Webpack</span>
              </div>
              <p className="description">
                A web app that uses CryptoCompare's API to return common crypto
                prices.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Projects;
