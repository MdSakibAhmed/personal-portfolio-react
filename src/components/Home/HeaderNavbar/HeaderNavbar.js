import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImg from "../../../images/Untitled-fi-01-owgso2mbdg98asfxutp95jlk7djglijb5si8gy1l9w.png";
import "./HeaderNavbar.css"


const HeaderNavbar = () => {
    return (
        <div className=' bg-dark row p-3 d-flex justify-content-between'>
           <div className='col-md-2 offset-1'>
<img src={ProfileImg} alt=''/>

           </div>
           <div className='col-md-6 p-0 text-center'>

           <ul style={{listStyleType:"none"}} className='d-flex pt-1 '>
         
               <li>  <Link className='text-white'>Home</Link></li>
               <li><Link className='text-white' to='/skills'>Skills</Link></li>
               <li><Link className='text-white '>Projects</Link></li>
               <li><Link className='text-white '>Blog</Link></li>
               <li><Link className='text-white '>Resume</Link></li>
               <li><Link className='text-white ' to='/contact'>Contact Me</Link></li>
           </ul>

           </div>
        </div>
    );
};

export default HeaderNavbar;