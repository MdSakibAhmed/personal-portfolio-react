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
    <div>
      <div className="welcome d-flex">
        <div className="mt-4">
          <ul style={{ listStyleType: "none" }}>
            <li className="mb-3">
              <FontAwesomeIcon icon={faLinkedin} />{" "}
            </li>
            <li className="mb-3">
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li className="mb-3">
              <FontAwesomeIcon icon={faCodepen} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
          </ul>
        </div>

        <div className="ml-5">
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

          <div className="mt-5">
            <button className="bg-transparent  button-action text-white p-2">
              View My Work
            </button>
            <button className="bg-transparent button-action text-white p-2">
              {" "}
              Download Resume
            </button>
          </div>
        </div>
      </div>

	  <div id='introduction'>
		  <h1>Know Who <span className='highlightedText' >I am</span> </h1>
		  <p> I love programing and learn everyday something is new is <span className='highlightedText'>my hobby</span> </p>
		  <p>I am fluent in modern  <span className='highlightedText'>JavaScript and reactjs</span> </p>
		  <p>My current focus is on  <span className='highlightedText'>Deep Learning and Natural Language Processing.</span> </p>
		  <p> Now i pay my full attention for developing products with <span className='highlightedText'>Modern Javascript Frameworks  like Node.js and React.js</span> </p>
	  </div>
      
    </div>
  );
};

export default MainHeader;
