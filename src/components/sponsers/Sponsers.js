import React from "react";
import Numerade from "../../images/numerade.png";

const Sponsers = () => {
  return (
    <div
      className="sponsersSection d-flex flex-column p-2 m-2 mt-5 py-md-4 px-md-3 m-md-4"
      id="sponsersSectionId"
    >
      <h1 id="main-heading">Sponsors</h1>
      
      <a href="https://www.numerade.com/">
         <img alt="numerade-logo" src={Numerade} width="464.012738854" height="100"/>
      </a>
      <p>
        STEM homework and study destination with over 1,000,000 lesson videos taught by experts in subjects including physics, calculus, engineering, biology, chemistry, stats and more.
      </p>
    </div>
  );
};

export default Sponsers;
