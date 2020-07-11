import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { FiCamera } from "react-icons/fi";

const Navbar = (e) => {
  const mystyle = {
    fontSize: "20px",
    paddingLeft: "65px",
    paddingTop: "4px",
  };

  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="true"
      bg="dark"
      variant="dark"
    >
      <ReactBootStrap.Navbar.Brand style={mystyle} href="#">
        <FiCamera /> <b>Album</b>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.NavDropdown.Divider />
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <h1>aflssjfşlajfalşkjfas</h1>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
};

export default Navbar;
