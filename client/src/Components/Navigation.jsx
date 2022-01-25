import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import React, { useEffect, useState } from "react";
export default function Navigation() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(true);

  useEffect(() => {
    const getUserID = localStorage.getItem("userID");
    setLoggedIn(getUserID);
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand id="logo" href="/">
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
          <Nav.Link id="link" href="/">
            Home
          </Nav.Link>
          <Nav.Link id="link" href="/Resources">
            Resources
          </Nav.Link>

          <NavDropdown title="More" id="collasible-nav-dropdown">
            <NavDropdown.Item id="link" href="/email">
              Contact
            </NavDropdown.Item>
            <NavDropdown.Item id="link" href="/About">
              About
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          {loggedIn ? (
            <>
              <Nav.Item>
                <Nav.Link id="link" href="/Adopt">
                  Adopt
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id="link" href="/Favourites">
                  Favourites
                </Nav.Link>
              </Nav.Item>
            </>
          ) : null}
          {loggedIn ? (
            <button id="link" onClick={logout}>
              Logout{" "}
            </button>
          ) : (
            <Nav.Item>
              <Nav.Link id="link" href="/Login">
                Login{" "}
              </Nav.Link>
            </Nav.Item>
          )}
          {!loggedIn ? (
            <>
              <Nav.Item>
                <Nav.Link id="link" href="/Register">
                  Register
                </Nav.Link>
              </Nav.Item>
            </>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
