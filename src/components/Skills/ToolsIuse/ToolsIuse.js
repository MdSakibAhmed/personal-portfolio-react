import React from 'react';
import gitImg from "../../../images/git.png"
import firebaseImg from "../../../images/firebase.png"
import herokuImg from "../../../images/heroku.png"
import Skill from '../Skill/Skill';

const ToolsIuse = () => {
    const tools = [{
        title:"Git",
        img:gitImg
    },{
        title:"Git",
        img:firebaseImg
    },{
        title:"Git",
        img:herokuImg
    },]

    return (
        <div className='container'>
            <h1 className='text-center text-white'> <span className="highlightedText">Tools </span> I use </h1>
            <div className="d-flex justify-content-center flex-wrap">
            {
                tools.map(tool => <Skill skill={tool}></Skill>)
            }
            </div>

            
        </div>
    );
};

export default ToolsIuse;