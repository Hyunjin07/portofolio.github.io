import React from "react";
import "../App.css";

const Home = () => {
  return (
    <section id="home">
      <div className="home__container">
        <img
          src={`${process.env.PUBLIC_URL}/imgs/profile.jpg`}
          alt="Hyunjin's profile photo"
          className="home__avatar"
        />
        <h1 className="home__title">
          Hello
          <br /> I'm a developer, Hyunjin
        </h1>
        <h2 className="home__description">
          I am a creative web developer in Toronto
        </h2>
        <button className="home__contact" data-link="#contact">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Home;
