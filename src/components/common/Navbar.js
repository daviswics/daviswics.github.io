import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-scroll";

import Logo from "../../images/wicslogowhite-02.png";

const MyNavbar = () => {
  const navbarProps = {
    collapseOnSelect: true,
    expand: "md",
    className: "navbarSection navbar-light py-1", //py-md-1 py-2 px-3",
  };
  const navStyle = {
    className: "navStyle mr-4 px-3",
  };

  return (
    <Navbar {...navbarProps}>
      <Navbar.Brand
        className="px-md-4"
        as={Link}
        to="homeSectionId"
        activeClass="active"
        spy={true}
        smooth={true}
      >
        <Button className="bg-transparent" style={{ border: "none" }}>
          <img src={Logo} alt="wics logo" id="wics-logo" />{" "}
          {/*would be better if the logo was black instead of white */}
        </Button>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto px-3">
          <Button
            as={Link}
            to="homeSectionId"
            spy={true}
            smooth={true}
            {...navStyle}
          >
            home
          </Button>
          <Button
            as={Link}
            to="aboutSectionId"
            spy={true}
            smooth={true}
            {...navStyle}
          >
            about
          </Button>
          <Button
            as={Link}
            to="eventsSectionId"
            spy={true}
            smooth={true}
            {...navStyle}
          >
            events
          </Button>
          <Button
            as={Link}
            to="newsletterSectionId"
            spy={true}
            smooth={true}
            {...navStyle}
          >
            newsletter
          </Button>
          <Button
            as={Link}
            to="contactSectionId"
            spy={true}
            smooth={true}
            {...navStyle}
          >
            contact
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
