import React from "react";

import HomeBackground from "../../images/wicswebsitedesign-01.png";

const Home = () => {
  return (
    <div className="homeSection" id="homeSectionId">
      <img src={HomeBackground} alt="wics website" className="w-100" />
    </div>
  );
};

export default Home;