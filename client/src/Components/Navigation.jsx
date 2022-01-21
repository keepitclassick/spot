import { Navbar, Container, Nav } from "react-bootstrap";

import React, { useEffect, useState } from "react";
export default function Navigation() {
  //useEffect check localstorage for userID
  //conditionally render login/register
  //{userID ? logout: register}

  const [loggedIn, setLoggedIn] = useState("");
  useEffect(() => {
    const getUserID = localStorage.getItem("userID");
    setLoggedIn(getUserID);
  }, []);

  return (
    <>
      <Navbar id="nav" bg="dark" variant="dark">
        <Navbar.Brand id="logo" href="#home">
          <img
            alt=""
            src="./images/0D7BF294-2098-47E2-AE71-CCE624CCE1AC_4_5005_c.jpeg"
            width="300"
            height="100"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Nav id="links" className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          {loggedIn ? (
            <Nav.Item>
              <Nav.Link href="/Adopt">Adopt</Nav.Link>
            </Nav.Item>
          ) : null}
          <Nav.Item>
            <Nav.Link href="/Resources">Resources</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/email">Contact</Nav.Link>
          </Nav.Item>
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
      </Navbar>
    </>
  );
}
