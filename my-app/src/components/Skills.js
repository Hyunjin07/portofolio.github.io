import React from "react";
import "../App.css";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section__container">
        <h1>Skills</h1>
        <h2>Skills & Attributes</h2>
        <div className="skillset">
          <div className="skillset__left">
            <h3 className="skillset__title">Skills</h3>
            <div className="skill">
              <div className="skill__description">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>CSS</span>
                <span>90%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>React</span>
                <span>70%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>Angular</span>
                <span>70%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>Java</span>
                <span>80%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>C#</span>
                <span>80%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>DB</span>
                <span>80%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
          <div className="skillset__right">
            <div className="tools">
              <h3 className="skillset__title">Tools</h3>
              <ul className="tools__list">
                <li>
                  <span>Visual Studio Code</span>
                </li>
                <li>
                  <span>IntelliJ</span>
                </li>
                <li>
                  <span>Visual Studio</span>
                </li>
                <li>
                  <span>Oracle Sql</span>
                </li>
                <li>
                  <span>Eclips</span>
                </li>
              </ul>
            </div>
            <div className="etc">
              <h3 className="skillset__title">Etc</h3>
              <ul className="etc__list">
                <li>
                  <span>GitHub</span>
                </li>
                <li>
                  <span>Git</span>
                </li>
                <li>
                  <span>Jira</span>
                </li>
                <li>
                  <span>Microsoft office</span>
                </li>
                <li>
                  <span>Visual Paradigm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
