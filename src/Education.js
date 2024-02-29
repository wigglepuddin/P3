// Education.js

import React, { useState } from "react";
import AB from "./bgimg/school.jpg";
import olpaImage from "./bgimg/olpa.png";
import collegeImage from "./bgimg/ncf.jpg";
import Typewriter from "typewriter-effect";
import "./Styles/education.css";

function Education() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className="pageBackground" style={{backgroundImage: `url(${AB})`}}>
      <div className="pageTitle">
        <Typewriter
          options={{
            autoStart:true,
            loop:true,
            delay:40,
            strings:[
              "Welcome to my Education Page.",
            ],
          }}
        />
      </div>
      <div className="cards">
        <div
          className={`carded1 ${isHovered1 ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <div className="infoed1">
            <h3>Preschool, Elementary & JHS</h3>
            <p>I studied in Our Lady of La Porteria Academy from preschool to junior high school. This school is located in San Antonio Calabanga.</p>
          </div>
          <img src={olpaImage} alt="OLPA" />
        </div>

        <div
          className={`carded2 ${isHovered2 ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <div className="infoed2">
            <h3>JHS & SHS</h3>
            <p>During my SHS years, I moved to Naga College Foundation and took TVL ICT track.</p>
          </div>
          <img src={collegeImage} alt="NCF" />
        </div>

        <div
          className={`carded3 ${isHovered3 ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          <div className="infoed3">
            <h3>College</h3>
            <p>I am currently a 3rd-year BS Information System student at Naga College Foundation.</p>
          </div>
          <img src={collegeImage} alt="NCF" />
        </div>
      </div>
    </div>
  );
}

export default Education;
