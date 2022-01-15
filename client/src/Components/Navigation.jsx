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
        <Nav>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/Adopt">Adopt</Nav.Link>
          <Nav.Link href="/Resources">Resources</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
