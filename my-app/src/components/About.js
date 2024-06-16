import React from "react";
import "../App.css";

const About = () => {
  return (
    <section id="about" className="section section__container">
      <h1>About me</h1>
      <p>
        My name is Hyunjin Park. I am passionate about coding and creating
        innovative solutions that drive positive impact. As a web developer, I
        have gained expertise in a wide range of technologies, including HTML,
        CSS, JavaScript, and various frameworks such as React, and Angular.
      </p>
      <div className="about__majors">
        <div className="major">
          <div className="major__icon">
            <i className="fas fa-university"></i>
          </div>
          <h2 className="major__title">Academic Project</h2>
          <p className="major__description">HTML, CSS, JavaScript, C#</p>
        </div>
        <div className="major">
          <div className="major__icon">
            <i className="fab fa-html5"></i>
          </div>
          <h2 className="major__title">Personal Project</h2>
          <p className="major__description">
            HTML, CSS, JavaScript, TypeScript, Angular, Node.js, MongoDB
          </p>
        </div>
        <div className="major">
          <div className="major__icon">
            <i className="fas fa-server"></i>
          </div>
          <h2 className="major__title">Back-end</h2>
          <p className="major__description">Java, JavaScript, C#</p>
        </div>
      </div>
    </section>
  );
};

export default About;
