import React from "react";

const Newsletter = () => {
  return (
    <div
      className="newletterSection d-flex flex-column p-2 m-2 mt-5 py-md-4 px-md-3 m-md-4"
      id="newsletterSectionId"
    >
      <h1 id="main-heading">Want to learn more?</h1>
      <h3 id="sub-heading">
        Sign up for our newsletter:{" "}
        <a href="https://tinyletter.com/wicsdavis"> Here</a>
      </h3>
    </div>
  );
};

export default Newsletter;
