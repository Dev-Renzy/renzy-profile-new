import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello 👋🏻, I'm <br /> <span className="info-name">Renzy Verano</span>.
          <br /> A Software Developer who love coding and turning ideas into application. Knowledgeable in software
development and design with experience in software testing as well .
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.gif").default}
            className="picture"
          />
        </div>
      </div>
    {/*<SocialContact/>*/}
      </div>
      
  );
}

export default About;
