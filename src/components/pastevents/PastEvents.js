import React from "react";
import { Button } from "react-bootstrap";
import { Fade } from "react-reveal";

import PastEventList from "./PastEventList";

const PastEvents = () => {
  return (
    <div
      className="eventsSection mt-5" //p-2 m-2 py-md-4 px-md-3 m-md-4
      id="eventsSectionId"
    >
      <Fade left className="event-header mt-5">
        <h1 id="main-heading">Past Events</h1>
        <h3 id="sub-heading">
          Events from fall quarter of 2021.
        </h3>

        <h5 id="sub-heading">
          Thanks to everyone who attended our meetings, whether in person or virtually.
        </h5>
      </Fade>
      <br />
      <div className="events-body d-flex">
        <div className="events-bar"></div>
        <Fade top cascade duration={1000} distance="140%">
        <div className="events-list d-flex flex-column flex-grow-1">
          {PastEventList.map((event) => {
            return (
              <div>
                <h5 className="p-2" key={`${event.id}`}>
                  <b> {event.name} </b>
                  <br />
                </h5>
                <h6 className="pl-5">
                  {event.date}
                  <br />
                  <br />
                  {event.type === "in-person" ? (<p> Location: Chemistry Building 179
                    <br />
                    <a href={event.link}>Join virtually</a>
                    <br />
                    </p>) :
                  (<a href={event.link}>Join virtually</a>)

                    }

                </h6>
              </div>
            );
          })}
        </div>
        </Fade>
      </div>
      <br />
      <br />
      <div className="d-flex" id="section-button">
        <a href="https://www.facebook.com/DavisWICS/">
          <Button className="rounded-pill px-4 text-white">
            {" "}
            <b></b> events
          </Button>
        </a>
      </div>
    </div>
  );
};

export default PastEvents;