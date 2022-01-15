import { Navbar, Container } from "react-bootstrap";

export default function Nav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
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
        </Container>
      </Navbar>
    </>
  );
}
