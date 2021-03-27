import React from "react";
import { Button } from "react-bootstrap";

import EventList from "./EventList";

const Events = () => {
  return (
    <div
      className="eventsSection mt-5" //p-2 m-2 py-md-4 px-md-3 m-md-4
      id="eventsSectionId"
    >
      <div className="event-header mt-5">
        <h1 id="main-heading">Spring Quarter 2021</h1>
        <h3 id="sub-heading">
          Come out to our virtual events for this quarter!
        </h3>
      </div>
      <br />
      <div className="events-body d-flex">
        <div className="events-bar"></div>
        <div className="events-list d-flex flex-column flex-grow-1">
          {EventList.map((event) => {
            return (
              <div>
                <h4 className="p-2" key={`${event.id}`}>
                  <b> {event.name} </b> 
                  <br />
                </h4>
                <h5 className="pl-5">
                  {event.date} 
                  <br />
                  Join here:
                  {/*{event.link} */}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <div className="d-flex" id="section-button">
        <a href="https://www.facebook.com/DavisWICS/">
          <Button className="rounded-pill px-4 text-white">
            {" "}
            <b>></b> events
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Events;
