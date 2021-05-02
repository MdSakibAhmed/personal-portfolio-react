import React from 'react';
import "./Contact.css"
import ContactForm from '../ContactForm/ContactForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faWhatsapp,
  faSkype
  
  
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope,faPhone,faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"
const Contact = () => {
    const serviceId = "service_vo4np8h"
    return (
        <div style={{height:"100vh"}} className="contactBackground   ">
        <div className="row ">
        <div className="col-md-5 offset-1 mt-5">

<ul className="p-0 list-unstyled d-inline">
<li className=" "> <FontAwesomeIcon className="icon-color" icon={faMapMarkerAlt}/> <span className="ml-4 ">Dhaka-1229, Bangladesh</span> </li>
<li className=" mt-3 "> <FontAwesomeIcon className="icon-color" icon={faEnvelope}/> <span className="ml-4 ">sakibahmad99090@gmail.com</span> </li>
    <li className=" mt-3"> <FontAwesomeIcon className="icon-color" icon={faWhatsapp}/> <span className="ml-4 ">+8801634757554</span> </li>
    <li className=" mt-3"> <FontAwesomeIcon className="icon-color" icon={faPhone}/> <span className="ml-4 ">+8801634757554</span> </li>
    <li className=" mt-3"> <FontAwesomeIcon className="icon-color" icon={faSkype}/> <span className="ml-4 ">live:sakibahmad990904</span> </li>
    
    <li></li>
    <li></li>
    <li></li>
</ul>

            </div>
            <div className="col-md-5">
                 <ContactForm></ContactForm>
            </div>
        </div>
            
           
        </div>
    );
};

export default Contact;