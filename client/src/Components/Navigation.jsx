import { Navbar, Container, NavItem, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand id="logo" href="#home">
            <img
              alt=""
              src="./images/0D7BF294-2098-47E2-AE71-CCE624CCE1AC_4_5005_c.jpeg"
              width="200"
              height="90"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav id="links" className="justify-content-end">
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
        </Container>
      </Navbar>
    </>
  );
}
