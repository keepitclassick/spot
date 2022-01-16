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
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Adopt">Adopt</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Resources">Resources</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/About">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/email">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Login">Login</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
