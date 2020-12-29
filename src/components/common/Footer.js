import React from "react";

import FbIcon from "../../images/wicsfbicon-01.png";
import InstaIcon from "../../images/insta_icon-01.png";
import EmailIcon from "../../images/email_icon-01.png";

const Footer = () => {
  return (
    <div className="bg-white d-flex justify-content-center">
      <img src={FbIcon} alt="wics fb " id="footer-icon" />
      <img src={InstaIcon} alt="wics insta icon" id="footer-icon" />
      <img src={EmailIcon} alt="wics email logo" id="footer-icon" />
    </div>
  );
};

export default Footer;
