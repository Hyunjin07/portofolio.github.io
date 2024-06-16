import React, { useState } from "react";
import projects from "./projects";
import "../App.css";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("*");

  const categories = ["All", "Academic-Project", "Personal-Project"];

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "*"
      ? projects
      : projects.filter((project) => project.type === selectedCategory);

  return (
    <section id="work" className="section">
      <div className="section__container">
        <h1>My work</h1>
        <h2>Projects</h2>
        <div className="work__categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category__btn ${
                (selectedCategory === "*" && category === "All") ||
                selectedCategory === category
                  ? "active selected"
                  : ""
              }`}
              data-filter={category}
              onClick={() =>
                handleButtonClick(category === "All" ? "*" : category)
              }
            >
              {category}{" "}
              <span className="category__count">
                {category === "All"
                  ? projects.length
                  : projects.filter((project) => project.type === category)
                      .length}
              </span>
            </button>
          ))}
        </div>

        <div className="work__projects">
          {filteredProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="project"
              target="_blank"
              rel="noopener noreferrer"
              data-type={project.type}
            >
              <img
                className="project__img"
                src={project.image}
                alt={project.title}
              />
              <div className="project__description">
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
