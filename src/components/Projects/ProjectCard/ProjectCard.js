import React from 'react';
import Technology from '../Technology/Technology';
import img1 from "../../../images/bootstrap.png"
import img2 from "../../../images/css.jpg"
import img3 from "../../../images/merarlui.svg"
import { Carousel } from 'react-bootstrap';
const ProjectCard = ({project}) => {
    const {title,description,features,technology,links,sliderImgs} = project;
    return (
        <div className="row border bg-white mb-4 shadow rounded pt-5 pb-2 mt-3">
            <div className="col-md-6">
               
                <Carousel>
  <Carousel.Item>
    <img style={{width:"500px",height:"230px"}}
      className="d-block "
      src={sliderImgs[0]}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:"500px",height:"230px"}}
      className="d-block"
      src={sliderImgs[1]}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:"500px",height:"230px"}}
      className="d-block "
      src={sliderImgs[2]}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:"500px",height:"230px"}}
      className="d-block "
      src={sliderImgs[3]}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
            </div>
            <div className=" col-md-6">
        <h1 style={{fontFamily: 'Grenze Gotisch'}}>{title}</h1>
        <p>{description}The main functionalities of this app are listed below:-</p>
        <p style={{wordWrap:"break-word"}}>{features}</p>
        <div>
          {technology.map( tc => <Technology technology={tc}></Technology>)}  
        </div>
        <div>
        <a href={links[1]}><button style={{background:"#4bffa5"}} className="mr-4 border-0 rounded pl-3 pr-3 p-1">{links[0]}</button></a>
        <a href={links[3]}><button style={{background:"#4bffa5"}} className=" border-0  rounded pl-3 pr-3 p-1">{links[2]}</button></a>
            
        </div>
        

            
        </div>
        </div>
        
    );
};

export default ProjectCard;
