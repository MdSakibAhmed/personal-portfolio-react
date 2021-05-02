import React from 'react';
import "./Skill.css"

const Skill = ({skill}) => {
    return (
        <div className='p-4 skill-box  d-flex justify-content-center align-items-center  mr-5 mb-5'>
            <img style={{width:"70px"}}  src={skill.img} alt=""/>
        </div>
    );
};

export default Skill;
