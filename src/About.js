import React, { useState } from "react";
import videoBG from "./assets/BG.mp4";
import "./Styles/about.css";
import mySelf from "./bgimg/profile.jpg";
import yuto from "./bgimg/yuto.jpg"; 
import fd from "./bgimg/fd.jpg";  
import gaming from "./bgimg/gaming.jpg";  
import vans from "./bgimg/vans.jpg";  
import photography from "./bgimg/photo.jpg";  
import Typewriter from "typewriter-effect";

function About() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  return (
    <div>
      <div className="videoContainer">
        <video className="videoBG" src={videoBG} autoPlay loop muted />
      </div>
      
      <div className="pagetitle">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 20,
            strings: [
              "This is my About Page.",
              "Let me introduce myself...",
              "My name is Rex Voltaire Arga",
              "These are some of my hobbies and favorite things",
            ],
          }}
        />
      </div>
      <div className="cards">
        <div
          className={`card1 ${isHovered1 ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <div className="info1">
            <h1>About me</h1>
            <p>My name is Rex Voltaire Arga but my friends call me pogi. I am 21 years old, I live in Paolbo Calabanga Camarines Sur. </p>
          </div>
          <img src={mySelf} alt=""/>
        </div>

        <div
          className={`card2 ${isHovered2 ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <div className="info2">
            <h1>Skateboarding</h1>
            <p>Skateboarding is also one of my hobbies. I love riding and practicing tricks. My favorite skateboard brand is Baker Skateboards, and my favorite pro skater is Yuto Horigome.</p>
          </div>
          <img src={yuto} alt=""/>
        </div>

        <div
          className={`card3 ${isHovered3 ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          <div className="info3">
            <h1>JDM Cars</h1>
            <p>I'm passionate about JDM cars. My favorite is the Mazda RX7 FD Veilside. Its cool appearance and rotary engine make it stand out.</p>
          </div>
          <img src={fd} alt=""/>
        </div>

        {/* New cards */}
        <div className ="new-cards">
        <div
          className={`card4 ${isHovered4 ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        >
          <div className="info4">
            <h1>Gaming</h1>
            <p>Gaming is one of my hobbies. It makes me happy and entertained. Gaming also helps me relax, socialize, and exercise my problem-solving skills and creativity.</p>
          </div>
          <img src={gaming} alt=""/>
        </div>

        <div
          className={`card5 ${isHovered5 ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered5(true)}
          onMouseLeave={() => setIsHovered5(false)}
        >
          <div className="info5">
            <h1>Sneakers</h1>
            <p>I also like collecting sneakers. Collecting Sneakers make me happy my favorite sneaker brand is Vans.</p>
          </div>
          <img src={vans} alt=""/>
        </div>

        <div
          className={`card6 ${isHovered6 ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered6(true)}
          onMouseLeave={() => setIsHovered6(false)}
        >
          <div className="info6">
            <h1>Photography</h1>
            <p>Photography is a hobby that allows me to capture moments and express my creativity through images.</p>
          </div>
          <img src={photography} alt=""/>
        </div>
      </div>
    </div>
  </div> 
  );
}

export default About;