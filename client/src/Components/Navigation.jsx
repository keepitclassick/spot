import { Navbar, Container, NavItem, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand id="logo" href="#home">
          <img
            alt=""
            src="./BA7E6C06-C68A-4B54-9CEC-3C39CAFB09CB_4_5005_c.jpeg"
            width="80"
            height="60"
            className="d-inline-block align-top"
          />{" "}
          Spot
        </Navbar.Brand>
        <Nav id="links">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/Adopt">Adopt</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/Resources">Resources</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/About">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/Register">Register</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/Login">Login</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}
