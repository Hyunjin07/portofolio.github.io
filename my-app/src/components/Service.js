import React from "react";
import "../App.css";

const Service = () => {
  return (
    <section id="service" className="section">
      <div className="section__container">
        <h1>Service</h1>
        <h2>See what Can I do it</h2>
        <div className="services">
          <div className="service">
            <img
              src={`${process.env.PUBLIC_URL}/imgs/web.png`}
              alt="People"
              className="service__icon"
            />
            <div className="service__icon-bubble">
              <h2>Create Web page and design</h2>
              <p>
                I can provide to create web page and design. I can divide layout
                and decorate webpage and connect server by using HTML,CSS,
                Javascript, node.js, and MongoDB.
              </p>
            </div>
          </div>
          <div className="service">
            <div className="service__icon-bubble">
              <h2>Database management</h2>
              <p>
                Familiarity with database programming languages, and experience
                with database. Proficient in database management systems,
                including SQL Server, MySQL, and Oracle.
              </p>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/imgs/db.png`}
              className="service__icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
