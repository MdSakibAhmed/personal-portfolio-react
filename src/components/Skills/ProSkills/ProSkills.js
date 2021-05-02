import React from 'react';
import htmlImg from "../../../images/html.png"
import cssImg from "../../../images/css.jpg"
import bootstrapImg from "../../../images/bootstrap.png"
import reactImg from "../../../images/react.png"
import reactBootstrapImg from "../../../images/reactbootstrap.png"
import jsImg from "../../../images/js.jpg"
import metrialUI from "../../../images/merarlui.svg"
import wordpressImg from "../../../images/wordpress.png"
import scssImg from "../../../images/scss.svg"
import nodeImg from "../../../images/nodejs.png"
import mongoImg from "../../../images/mogodb2.png"
import reduxImg from "../../../images/redux.png"
import expressImg from "../../../images/expreess2.png"
import Skill from '../Skill/Skill';

const ProSkills = () => {
    const skills =[ {
        title:"HTML",
        img:htmlImg

    },{
        title:"CSS",
        img:cssImg

    },{
        title:"JavaScript",
        img:jsImg

    },{
        title:"React",
        img:reactImg

    },{
        title:"Bootstrap",
        img:bootstrapImg

    },{
        title:"React bootstrap",
        img:reactBootstrapImg

    },{
        title:"metarial Ui",
        img:metrialUI

    },{
        title:"Nodejs",
        img:nodeImg

    },{
        title:"mongodb",
        img:mongoImg

    },{
        title:"express",
        img:expressImg

    },{
        title:"redux",
        img:reduxImg

    },{
        title:"scss",
        img:scssImg

    },{
        title:"wordpress",
        img:wordpressImg

    },]
    return (
        <div className='container pt-5'>
        <h1 className="text-center text-white">Professional <span className="highlightedText ">Skillset</span> </h1>
        <div className='d-flex justify-content-center flex-wrap'>
           {skills.map(skill => <Skill skill={skill}></Skill>)} 
        </div>
        </div>
    );
};

export default ProSkills;