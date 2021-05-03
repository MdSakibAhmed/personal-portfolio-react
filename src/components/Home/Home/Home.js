import React from 'react';
import Particles from 'react-particles-js';
import Particle from '../../Particle/Particle';
import Header from '../Header/Header';
import MainHeader from '../MainHeader/MainHeader';
import "./Home.css"

const Home = () => {
    return (
        <div style={{height:"100%"}}>
            <Header></Header>
            <MainHeader></MainHeader>
         
        </div>
    );
};

export default Home;