import React from "react";

import FbIcon from "../../images/wicsfbicon-01.png";
import InstaIcon from "../../images/insta_icon-01.png";
import EmailIcon from "../../images/email_icon-01.png";

const Contact = () => {
  return (
    <div className="contactSection d-flex flex-column p-2 m-2 mt-5 py-md-4 px-md-3 m-md-4"
    id="contactSectionId"
    >
     <h1 id="main-heading">Contact</h1>
      <h5 id="sub-heading">
      🍉Email
      </h5>
      <p>
        {" "}
        <a href="mailto:wicsdavis@gmail.com">wicsdavis@gmail.com</a>
      </p>
      <h5 id="sub-heading">
      🍋LinkedIn
      </h5>
      <p>
        {" "}
        <a href="https://www.linkedin.com/company/davis-women-in-computer-science/">Davis Women in Computer Science</a>
      </p>
      <h5 id="sub-heading">
      🍇Discord
      </h5>
      <p>
        {" "}
        <a href="https://discord.gg/MmK9CySA9F">WiCS Discord Invite</a>
      </p>
      <h5 id="sub-heading">
      🌷Instagram
      </h5>
      <p>
        {" "}
        <a href="https://www.instagram.com/wicsdavis/">@wicsdavis</a>
      </p>
      <h5 id="sub-heading">
      🌿Facebook
      </h5>
      <p>
        {" "}
        <a href="https://www.facebook.com/DavisWICS/">Davis WiCS</a>
      </p>
      <h5 id="sub-heading">
      🍓Give Page
      </h5>
      <p>
        {" "}
        <a href="https://give.ucdavis.edu/2423/23WCSCH">Give UC Davis</a>
      </p>
      <h5 id="sub-heading">
      Website
      </h5>
      <p>
        {" "}
        <a href="https://wics.engineering.ucdavis.edu/">wics.engineering.ucdavis.edu</a>
      </p>
      <div
        className="contactSection2 bg-white d-flex justify-content-center py-md-5"
        id="contactSectionId2"
      >
        <a href="https://www.facebook.com/DavisWICS/">
          <img src={FbIcon} alt="wics fb " id="contact-icon" />
        </a>
        <a href="https://www.instagram.com/wicsdavis/">
          <img src={InstaIcon} alt="wics insta icon" id="contact-icon" />
        </a>
        <a href="mailto:wicsdavis@gmail.com">
          <img src={EmailIcon} alt="wics email logo" id="contact-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
