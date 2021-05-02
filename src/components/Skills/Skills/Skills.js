import React from "react";
import Particles from "react-particles-js";
import ProSkills from "../ProSkills/ProSkills";
import ToolsIuse from "../ToolsIuse/ToolsIuse";
import Tools from "../ToolsIuse/ToolsIuse";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skillBackground  ">
      <div>
        <ProSkills></ProSkills>
      <ToolsIuse></ToolsIuse>
      </div>
    </div>
  );
};

export default Skills;
