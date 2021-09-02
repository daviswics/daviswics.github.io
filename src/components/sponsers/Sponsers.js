import React from "react";
import Numerade from "../../images/numerade.png";

const Sponsers = () => {
  return (
    <div
      className="sponsersSection d-flex flex-column p-2 m-2 mt-5 py-md-4 px-md-3 m-md-4"
      id="sponsersSectionId"
    >
      <h1 id="main-heading">Sponsers</h1>
    

      <a href="https://www.numerade.com/">
        <img src={Numerade} alt="numerade sponser logo" id="numerade-logo" style="width:500px;height:600px;"/>
      </a>
      
    </div>
  );
};

export default Sponsers;
