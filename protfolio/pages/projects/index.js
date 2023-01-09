import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    const data = await axios.get(
      `https://api.github.com/search/repositories?q=user:${"dipaligoswami"}+fork:true&sort=updated&per_page=10&type=Repositories`
    );
    console.log(data.data.items);
    setProjects(data.data.items);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>PROJECTS</h1>
      <div>
        {projects.length > 0 &&
          projects.map((project, index) => (
            <div key={index}>
              <h1>{project.name}</h1>
              <p>{project.stargazers_count}</p>
              <p>{project.forks_count}</p>
              <p>{project.language}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Project;
