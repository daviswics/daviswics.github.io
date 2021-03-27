import React from "react";
import { Button } from "react-bootstrap";

import AboutLogo from "../../images/circlelogo-03.png";

const About = () => {
  return (
    <div
      className="aboutSection d-flex flex-column p-2 m-2 mt-5 py-md-4 px-md-3 m-md-4"
      id="aboutSectionId"
    >
      <div>
        <h1 className="about-header mt-5" id="sub-heading">
          welcome! we are
        </h1>
        <h1 className="about-header" id="main-heading">
          davis women in computer science
        </h1>
      </div>
      <br />
      <div className="d-flex" id="about-body">
        <div
          className="d-flex flex-column flex-grow-1 flex-wrap w-100 text-black pr-md-3"
          id="about-bio"
        >
          <p>
            <b>Women in Computer Science (WiCS) </b>
            supports, empowers and motivates the growing community of women in
            computer science.
          </p>

          <p>
            We aim to prepare women for tech industry, in addition to inspiring
            women to explore educational and professional opportunities in
            computing through creating a powerful community, providing
            mentorship and helping them to succeed. We aim to grow, learn and
            spread the joy of computer science together!
          </p>
          <p>
            Our mission is to create a platform where we can share ideas about
            our personal projects, promote interest in programming and go to
            Hackathons. We want to create community of girls helping each other
            learn to code and working together to solve problems.
          </p>
        </div>
        <div className="about-logo-div d-flex justify-content-center  px-md-2">
          <img src={AboutLogo} alt="wics circle logo" id="about-logo" />
        </div>
      </div>
      <br />
      <div className="d-flex" id="section-button">
        <a href="https://www.facebook.com/DavisWICS/">
          <Button className="rounded-pill px-4 text-white">
            {" "}
            <b>></b> get involved
          </Button>
        </a>
      </div>
    </div>
  );
};

export default About;
