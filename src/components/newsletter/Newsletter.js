import React from "react";

const Newsletter = () => {
  return (
    <div
      className="newletterSection d-flex flex-column p-2 m-2 mt-5 py-md-4 px-md-3 m-md-4"
      id="newsletterSectionId"
    >
      <h1 id="main-heading">Newsletter</h1>
      <p>
      Q: How do front end devs like their brownies? <br/>
      A: GUI
      </p>
      <p>
        Fun tidbits you're signing up for include CS dad jokes,
        internship/scholarship opportunities, and tech event/conference invites.
      </p>
      <h3 id="sub-heading">
        Sign up for our newsletter to get meeting reminders! {" "}
        <a href="https://tinyletter.com/wicsdavis"> Link to TinyLetter Sign-Up Page</a>
      </h3>
    </div>
  );
};

export default Newsletter;
