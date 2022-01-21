import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import React, { useEffect, useState } from "react";
export default function Navigation() {
  //useEffect check localstorage for userID
  //conditionally render login/register
  //{userID ? logout: register}

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const getUserID = localStorage.getItem("userID");
    setLoggedIn(getUserID);
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand id="logo" href="#home">
        <img
          alt=""
          src="./images/0D7BF294-2098-47E2-AE71-CCE624CCE1AC_4_5005_c.jpeg"
          width="300"
          height="100"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Resources">Resources</Nav.Link>

          <NavDropdown title="More" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/email">Contact</NavDropdown.Item>
            <NavDropdown.Item href="/About">About</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          {loggedIn ? (
            <Nav.Item>
              <Nav.Link href="/Adopt">Adopt</Nav.Link>
            </Nav.Item>
          ) : null}
          {loggedIn ? (
            <button onClick={() => localStorage.clear()}>Logout</button>
          ) : (
            <Nav.Item>
              <Nav.Link href="/Login">Login </Nav.Link>
            </Nav.Item>
          )}
          {!loggedIn ? (
            <Nav.Item>
              <Nav.Link href="/Register">Register</Nav.Link>
            </Nav.Item>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
