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
        Q: What kind of microchip does this new vaccine contain, can I install a Linux based OS on it? 💉 <br/>
        A: I don't know for sure, but it must be ARM based 💪
      </p>
      <h5 id="sub-heading">
      🍓What's in the newsletter?
      </h5>
      <p>
        We write the WiCS weekly newsletter to lighten your mood with our
        Joke of the Week, challenge your coding skills with a coding challenge,
        and offer opportunities to apply to scholarships, internships, and
        attend events from companies and other clubs at Davis.
      </p>
      <p>
        Sign up for our newsletter to receive meeting reminders, CS dad jokes,
        internship/scholarship opportunities, and tech event/conference invites.
      </p>
      <h5 id="sub-heading">
        {" "}
        <a href="https://tinyletter.com/wicsdavis"> Link to Newsletter Sign-Up Page</a>
      </h5>
      <h5 id="sub-heading">
        {" "}
        <a href="https://docs.google.com/document/d/1ZXFzzfc1ZXmhT-OK1NW_cWnopbmeuol9Eet1NTqmNeQ/edit?usp=sharing"> WiCS New Student Guide to CS</a>
      </h5>
    </div>
  );
};

export default Newsletter;
