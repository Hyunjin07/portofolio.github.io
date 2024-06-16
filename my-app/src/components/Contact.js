import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h1 className="contact__title">Let's talk with me</h1>
      <h2 className="contact__email">Email: ca5522397@gmail.com</h2>
      <div className="contact__links">
        <a
          href="https://github.com/Hyunjin07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/hyunjin-park-a94325221/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin-square"></i>
        </a>
      </div>
      <p className="contact__rights">&copy;2022.All Rights reserved</p>
    </section>
  );
};

export default Contact;
