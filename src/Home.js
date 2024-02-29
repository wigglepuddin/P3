import React, { useState,} from "react";
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import "./Styles/home.css";
import bgHome from "../../rexxreact/src/bgimg/redbull2.jpg";
import wdogs from "../src/bgimg/logo.jpg";
import Image from 'react-bootstrap/Image';
import 'animate.css';

const Home = () => {
  const [state] = useState({
    title: "Welcome to my Homepage!",
    titleTwo:"I'm",
    titleThree:"Rex!",
    image: "wdogs",
  });

  const pageBackgroundStyle = {
    backgroundImage: `url(${bgHome})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    WebkitBackdropFilter: 'blur(5px)', 
    backdropFilter: 'blur(5px)', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'left',
    color: 'white',
    textAlign: 'left',
  };
  
  const contentStyle = {
    width: '80%',
    maxWidth: '2000px',
    padding: '0 20px',
    boxSizing: 'border-box',
    margin: '0 auto',
    marginTop: '100px',
    position: 'relative',
    zIndex: 1,
  };

  const imageContainerStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    marginRight: '20px', 
    marginTop: '100px', 
  };

  return (
    <div className= "home-intro">
      <div style={pageBackgroundStyle}>
        <div style={contentStyle}>
          <h2>
            <div className="title">{state.title}</div>
            <div className="titleTwo">{state.titleTwo}</div>
            <div className="titleThree">{state.titleThree}</div>
          </h2>
          <div className="text">
            <Typewriter
              options={{
                autoStart:true,
                loop:true,
                delay:40,
                strings:[
                  "Hi I'm a web developer",
                  "Would you like to know more about me?"
                ],
              }}
            />
          </div>
          <div className="about-me">
            <Link to="/about" className="button">About Me!</Link>
          </div>
        </div>
        <div style={imageContainerStyle}>
          <Image className="image animate__animated animate__fadeInLeft" src={wdogs} style={{ width: '200px', height: '200px', objectFit: 'cover'}} roundedCircle />
        </div>
      </div>
    </div>
  );
}

export default Home;
