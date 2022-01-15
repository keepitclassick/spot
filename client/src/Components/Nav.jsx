import { Navbar, Container } from "react-bootstrap";

export default function Nav() {
  return (
    <>
      <Navbar bsStyle="default" style={{ color: "blue" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./5223B194-2E82-4705-8DDC-F24D96F4091A.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Spot
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
