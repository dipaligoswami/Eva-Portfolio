import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCode, FaStar } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await axios.get(
      `https://api.github.com/search/repositories?q=user:${"dipaligoswami"}+fork:true&sort=updated&per_page=10&type=Repositories`
    );
    const avatar = await axios.get(
      `https://api.github.com/users/${"dipaligoswami"}`
    );
    console.log(avatar.data);
    setData(avatar.data);
    // console.log(data.data.items);
    setProjects(data.data.items);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <div>
            <img src={data.avatar_url} />
            <h1>{data.name}</h1>
            <p>{data.login}</p>
            <p>{data.bio}</p>
            <p>
              Full-stack Developer | JavaScript | Typescript | NodeJS | ReactJS
              | HTML | CSS | Chakra-UI{" "}
            </p>
            <button>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1XCmuecnpOpy2dvTBr84DcAWnItqL5fxW/view?usp=sharing"
              >
                Resume
              </a>
            </button>
            <button>
              <a href="https://github.com/dipaligoswami">Follow</a>
            </button>
          </div>
          <div>
            <h1>Full-stack Developer</h1>
            <h1>JavaScript</h1>
            <h1>Typescript</h1>
            <h1>NodeJS</h1>
            <h1>ReactJS</h1>
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>Chakra UI</h1>
          </div>
          <div>
            <ol>
              <li>
                Masai School
                <li>June 2022 - Present</li>
              </li>
              <li>
                MRIIRS
                <li>September 2018 - June 2020</li>
              </li>
              <li>
                Bachelor Degree
                <li>September 2015 - June 2018</li>
              </li>
            </ol>
          </div>
        </div>
        <div>
          {projects.length > 0 &&
            projects.map((project, index) => (
              <div key={index}>
                <h1>{project.name}</h1>
                <p style={{ display: "flex" }}>
                  <FaStar />
                  {project.stargazers_count}
                </p>
                <p style={{ display: "flex" }}>
                  <FaCode />
                  {project.forks_count}
                </p>
                <p>{project.language}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
