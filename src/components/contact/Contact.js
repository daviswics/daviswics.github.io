import React from "react";

import FbIcon from "../../images/wicsfbicon-01.png";
import InstaIcon from "../../images/insta_icon-01.png";
import EmailIcon from "../../images/email_icon-01.png";

const Contact = () => {
  return (
    <div
      className="contactSection bg-white d-flex justify-content-center py-md-5"
      id="contactSectionId"
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
  );
};

export default Contact;
