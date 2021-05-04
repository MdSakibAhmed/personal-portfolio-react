import React from "react";
import Particles from "react-particles-js";
import "./MainHeader.css";
import Typical from "react-typical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const MainHeader = () => {
  return (
    <div className="welcome d-flex  flex-wrap">
      <div className="mt-4 ml-5 mt-5">
        <ul className="d-flex flex-md-column" style={{ listStyleType: "none" }}>

        
        <li>
          <a href="https://www.linkedin.com/in/md-sakib-ahmed/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            
          </li>
        <li className="mb-3">
        <a href="https://github.com/MdSakibAhmed" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          </li>
          <li className="mb-3">
          <a href="https://codepen.io/mdsakibahmed" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCodepen} /></a>
            
          </li>
          
        </ul>
      </div>

      <div className="ml-5 mt-5 mr-2">
        <h1>Hi, I am</h1>
        <h1>
          {" "}
          <span style={{ color: "#4bffa5" }}>Sakib Ahmed</span>{" "}
        </h1>
        <p className="type-effect">
          <Typical
            steps={[
              "React Developer",
              2000,
              "Programmer",
              2000,
              "Front-End Developer",
              2000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </p>

     
          <button className="bg-transparent mb-3 button-action text-white p-2">
            View My Work
          </button>
          <a href="https://drive.google.com/file/d/16p-e1xOuu9Zm1j8nS8bUWy3xgn282D01/view?usp=sharing">
            {" "}
            <button className="bg-transparent button-action text-white p-2">
              {" "}
              Download Resume
            </button>
          </a>
    
      </div>

      <div className="mt-5 ml-5 mr-2" id="introduction">
        <h1>
          Know Who <span className="highlightedText">I am</span>{" "}
        </h1>
        <p>
          {" "}
          I love programing and learn everyday something is new is{" "}
          <span className="highlightedText">my hobby</span>{" "}
        </p>
        <p>
          I am fluent in modern{" "}
          <span className="highlightedText">JavaScript and reactjs</span>{" "}
        </p>
        <p>
          My current focus is on{" "}
          <span className="highlightedText">
            Deep Learning and Natural Language Processing.
          </span>{" "}
        </p>
        <p>
          {" "}
          Now i pay my full attention for developing products with{" "}
          <span className="highlightedText">
            Modern Javascript Frameworks like Node.js and React.js
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default MainHeader;
