import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function Banner() {
  return (
    <Container>
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <a href="/login">
            <Image
              className="mx-auto"
              src={
                "./images/F6DCA019-89B6-4F5E-B5B2-5559FC36E363_4_5005_c.jpeg"
              }
              fluid
            />
          </a>
        </div>
      </div>
    </Container>
  );
}
