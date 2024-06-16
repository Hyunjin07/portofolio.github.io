import React, { useState } from "react";
import "../App.css";

const projects = [
  {
    title: "Cosmetic Webpage",
    description: "HTML, CSS",
    image: "/imgs/projects/webpage.png",
    type: "Academic-Project",
    link: "https://github.com/Hyunjin07/cosmetic-webpage",
  },
  {
    title: "Table Calculator",
    description: "HTML, CSS, JavaScript",
    image: "/imgs/projects/tablegener.png",
    type: "Academic-Project",
    link: "https://github.com/Hyunjin07/BMR-Calculator",
  },
  {
    title: "BMR Calculator",
    description: "HTML, CSS, JavaScript",
    image: "/imgs/projects/bmrcal.png",
    type: "Academic-Project",
    link: "https://github.com/Hyunjin07/BMR-Calculator",
  },

  {
    title: "Music Play List",
    description: "C#",
    image: "/imgs/projects/MusicPlayList.png",
    type: "Academic-Project",
    link: "https://github.com/Hyunjin07/musicplaylist",
  },

  {
    title: "Art-Gallary",
    description: "HTML, CSS, JavaScript",
    image: "/imgs/projects/artgallery.png",
    type: "Academic-Project",
    link: "https://github.com/Hyunjin07/Art-Gallary",
  },

  {
    title: "Resister-form",
    description: "HTML, CSS, JavaScript",
    image: "/imgs/projects/resisterfo.png",
    type: "Academic-Project",
    link: "https://github.com/Hyunjin07/Resister-form",
  },
  {
    title: "Trip Gallery",
    description: "HTML, CSS, JavaScript",
    image: "/imgs/projects/tripgallery.png",
    type: "Academic-Project",
    link: "https://github.com/Hyunjin07/Trip-galleryt",
  },
  {
    title: "Mbti Test",
    description: "HTML, CSS, JavaScript",
    image: "/imgs/projects/loving_test.png",
    type: "Personal-Project",
    link: "https://github.com/Hyunjin07/loveTest",
  },
  {
    title: "Catch Game",
    description: "HTML,CSS,JavaScript",
    image: "/imgs/projects/catchGame.png",
    type: "Personal-Project",
    link: "https://github.com/Hyunjin07/CatchGame",
  },
  {
    title: "Music Streaming",
    description: "HTML,CSS,JavaScript",
    image: "/imgs/projects/MusicStreaming.png",
    type: "Personal-Project",
    link: "https://github.com/Hyunjin07/MusicStreaming",
  },
  {
    title: "API-Weather-To-Do-List",
    description: "HTML, CSS, JavaScript",
    image: "/imgs/projects/Todo.png",
    type: "Personal-Project",
    link: "https://github.com/Hyunjin07/To-DO",
  },
  {
    title: "RealEstate",
    description: "HTML,CSS",
    image: "/imgs/projects/RealEstate.png",
    type: "Personal-Project",
    link: "https://github.com/Hyunjin07/RealEstate_html",
  },
  {
    title: "Super Mario Game",
    description: "HTML,CSS, Javascript",
    image: "/imgs/projects/MarioGame.png",
    type: "Personal-Project",
    link: "https://github.com/Hyunjin07/MarioGame",
  },
  {
    title: "Number Guess Game",
    description: "HTML, CSS, JavaScript",
    image: "/imgs/projects/guess-number.png",
    type: "Personal-Project",
    link: "https://github.com/Hyunjin07/number_guess_game",
  },
  {
    title: "GPA Calculator",
    description: "C#",
    image: "/imgs/projects/GPA.png",
    type: "Academic-Project",
    link: "https://github.com/Hyunjin07/GPA-Calculator",
  },
  {
    title: "Management System",
    description: "C#,Winform",
    image: "/imgs/projects/ManagementSystem.png",
    type: "Personal-Project",
    link: "https://github.com/Hyunjin07/CShapStoreProject",
  },
  {
    title: "Event Store",
    description: "HTML,CSS,JavaScript,TypeScript,Angular,MongoDB",
    image: "/imgs/projects/6ixEvent.png",
    type: "Personal-Project",
    link: "https://github.com/Hyunjin07/EventStore",
  },
];
export default projects;
