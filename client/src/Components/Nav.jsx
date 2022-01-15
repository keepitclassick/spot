import { Navbar, Container } from "react-bootstrap";

export default function Nav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./5223B194-2E82-4705-8DDC-F24D96F4091A.jpeg"
              width="60"
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
