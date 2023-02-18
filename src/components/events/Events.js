import React from "react";
import { Button } from "react-bootstrap";
import { Fade } from "react-reveal";

import EventList from "./EventList";

const frameStyle = {
    border: 0,
    width: "800",
    height: "600",
    frameborder: "0", 
    scrolling: "no"

  };

const Events = () => {
  return (
    <div
      className="eventsSection mt-5" //p-2 m-2 py-md-4 px-md-3 m-md-4
      id="eventsSectionId"
    >
      <Fade left className="event-header mt-5">
        <h1 id="main-heading">Events</h1>
        <p>WiCS hosts a wide variety of events including socials, company events, and workshops. Join our discord to keep up to date on our upcoming events. Typically all in-person meetings can also be joined live through Zoom. If you are a company interested in hosting an event with us, please contact us at wicsdavis@gmail.com.</p>        
        <iframe title = "EventsCalendar" src="https://calendar.google.com/calendar/embed?src=c_0635e7ccf508e42b854bc2d687f8d111949e9f3f281849dc9031fb78f11b1b43%40group.calendar.google.com&ctz=America%2FLos_Angeles" style={frameStyle}></iframe>

{/* <h5 id="sub-heading">
  Events are subject to change.
</h5> */}

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
                  {event.type === "in-person" ? (<p> Location: {event.location}
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
        <a href="https://discord.gg/MJrvEdvYjA">
          <Button className="rounded-pill px-4 text-white">
            {" "}
            <b></b> discord
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Events;
