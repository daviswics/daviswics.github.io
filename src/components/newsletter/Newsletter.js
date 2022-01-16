import React from "react";

const Newsletter = () => {
  return (
    <div
      className="newletterSection d-flex flex-column p-2 m-2 mt-5 py-md-4 px-md-3 m-md-4"
      id="newsletterSectionId"
    >
      <h1 id="main-heading">Newsletter</h1>
      <h5 id="sub-heading">
      🌱Joke of the Week Sneak Peek
      </h5>
      <p>
        Q: What kind of microchip does this new vaccine contain, can I install a Linux based OS on it?💉 <br/>
        A: I don't know for sure, but it must be ARM based.💪
      </p>
      <h5 id="sub-heading">
      🍓What's in the newsletter?
      </h5>
      <p>
        We write the WiCS weekly newsletter to lighten your mood with a
        Joke of the Week, challenge your coding skills with a Coding Challenge,
        and offer opportunities to apply to Scholarships, Internships, and
        attend Events from companies and other clubs at Davis.
        We would love to hear your feedback and learn how we can better
        support you! You can contact us by messaging us in the WiCS discord,
        shooting us a quick email, or filling out the newsletter feedback form:
        {" "}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdnlof5ej1o3A0yfGyXYI3nGbzawvWp-XicfbHEFqigC2y7qA/viewform"> Feedback Form </a>
      </p>
      <p>
        Sign up for our newsletter to receive meeting reminders, CS dad jokes,
        internship/scholarship opportunities, and tech event/conference invites.
      </p>
      <h3 id="sub-heading">
        {" "}
        <a href="https://tinyletter.com/wicsdavis"> Link to TinyLetter Sign-Up Page</a>
      </h3>
    </div>
  );
};

export default Newsletter;
