import React from 'react';
import Service from '../Layout/Service';
import Findme from '../Layout/Findme';
import  './portfolio.css';
import Blog from '../Layout/Blog';
import Contact from '../Layout/Contact';

export default function About() {
    return (
        <>
        <div className="container-fluid" id="back">
            <div id="image-info" >
                <div id='info'>
                    <h1 style={{color:'white',fontSize:'100px',fontWeight:'900'}}>Hi, I'm <span style={{color:'orange'}}>Kawsar</span> <span style={{color:'white'}}>Ahmed</span></h1>
                    <h3 style={{color:'white',fontSize:'40px'}} className='display-6'><span style={{color:'white'}}>Fullstack</span> <span  style={{color:'white'}}>JavaScript</span> Developer !</h3>
                </div>
            </div>
            <div >
            <Findme></Findme>
            </div>
            <div>
                <a href="#services" className='mr-3'><button className="btn btn-primary btn-lg" >View My Work <span style={{color:'orange'}}> <i className='fas fa-arrow-down'></i></span></button></a>
                <a href="#blogs" className='mr-3'><button className="btn btn-outline-primary btn-lg" >Read Blogs <span style={{color:'orange'}}> <i className='fas fa-arrow-down'></i></span></button></a>
                <a href="#contact" ><button className="btn btn-primary btn-lg" >Contact With Me<span style={{color:'orange'}}> <i className='fas fa-arrow-down'></i></span></button></a>
            </div>
        </div>
        <Service></Service>
        <Blog></Blog>
        <Contact></Contact>
        </>
    )
}
