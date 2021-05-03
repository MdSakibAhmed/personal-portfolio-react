import React from 'react';
import Particle from '../../Particle/Particle';
import ProjectCard from '../ProjectCard/ProjectCard';
import doctorImg1 from "../../../images/doctor1.png"
import doctorImg2 from "../../../images/doctor2.png"
import doctorImg3 from "../../../images/doctor3.png"
import doctorImg4 from "../../../images/doctor4.png"
import mobileImg1 from "../../../images/mobile1.png"
import mobileImg2 from "../../../images/mobile2.png"
import mobileImg3 from "../../../images/mobile3.png"
import mobileImg4 from "../../../images/mobile4.png"
import riderImg1 from "../../../images/riders1.png"
import riderImg2 from "../../../images/riders2.png"
import riderImg3 from "../../../images/riders3.png"
import riderImg4 from "../../../images/riders4.png"

import "./Projects.css"
const Projects = () => {

   
   
    const cartDoctorTechnology= ["React.js", "Express js"," Environment variable", "mongo dB", "firebase authentication", "react-router", "stripe payment method", "react hook", "react hook form", "react-bootstrap", "heroku" ]
    const AllMobileTechnology= ["React.js", "Express js"," Environment variable", "mongo dB", "firebase authentication", "react-router",  "react hook", "react hook form", "react-bootstrap", "heroku" ]
    const fastRidersTechnology= ["React.js",  "firebase authentication", "react-router",  "react hook", "react hook form", "react-bootstrap", "netlify" ]
   const  projectList = [{
       title:"The Car Doctor",
       description:"This is a car repair website. It provides all car solution including while alignment, break service etc",
       features:`• Only logged customer can book service and review.
       • Customer can pay with credit card.
       • Customer can see his booked services with current order status on Dashboard panel. He can also review therefor his added review will be shown on testimonial section in home page.
       • If logged in user is an admin he can add new service or delete any service, change order status as well as can create new admin. 
       `,
       technology:cartDoctorTechnology,
       links:["Github", "https://github.com/MdSakibAhmed/the-car-doctor-client","Live", "https://the-car-doctor-c27fa.web.app/"],
       sliderImgs:[doctorImg1,doctorImg2,doctorImg3,doctorImg4]
   },{
    title:"All Mobile Matters",
    description:"This e-commerce website . Customer can buy his favorite smart phone from low price to high price",
    features:`•This is a MERN stack web app. Visitor can buy his favorite mobile from this app.
    • Only logged in customer can order product and he can see his ordered product list on the order tab.
    •He can manage orders from dashboard and add new product to database so that it is visible on home page. 
    `,
    technology:AllMobileTechnology,
    links:[ "Github", "https://github.com/MdSakibAhmed/all-mobile-matters-client ", "Live", "https://all-mobile-matters.web.app/ "],
    sliderImgs:[mobileImg1,mobileImg2,mobileImg3,mobileImg4]
},{
    title:"Fast Riders",
    description:"This is rider service website. User can select his favorite ride with select his destination",
    features:`•	Only logged in user can select his destination place.
    • By clicking on search user see his selected destination with capacity of the ride and its price.
    • A google map is added.`
    ,
    technology:fastRidersTechnology,
    links:[ "Github", "https://github.com/MdSakibAhmed/fast-riders", "Live", "https://fast-riders.netlify.app/"],
    sliderImgs:[riderImg1,riderImg2,riderImg3,riderImg4]
}]
    return (
        <div className="project-section ">
       
            <h1  className="text-center  text-white project-headline">My Recent <span className="highlightedText">Projects</span> </h1>

            <div className="container">
            {projectList.map(project => <ProjectCard  project={project}></ProjectCard>)}
                
            </div>


        </div>
    );
};

export default Projects;