import React from "react";
import { Button } from "react-bootstrap";
import { Fade } from "react-reveal";

import EventList from "./EventList";

const Events = () => {
  return (
    <div
      className="eventsSection mt-5" //p-2 m-2 py-md-4 px-md-3 m-md-4
      id="eventsSectionId"
    >
      <Fade left className="event-header mt-5">
        <h1 id="main-heading">Fall Quarter 2021</h1>
        <h3 id="sub-heading">
          Come out to our events for this quarter! All in-person meetings can also be joined live through Zoom.
        </h3>

        <h5 id="sub-heading">
          Events are subject to change.
        </h5>
      </Fade>
      <br />
      <div className="events-body d-flex">
        <div className="events-bar"></div>
        <Fade top cascade duration={1000} distance="140%">
        <div className="events-list d-flex flex-column flex-grow-1">
          {EventList.map((event) => {
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

export default Events;
