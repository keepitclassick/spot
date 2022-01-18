import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function Banner() {
  return (
    <div class="row">
      <div class="col-md"></div>
      <div class="col-md-6">
        <Image
          className="my-auto"
          src={"./images/BB7F034F-9CDA-4678-8758-689526938C11_4_5005_c.jpeg"}
          fluid
        />
      </div>
      <div class="col-md"></div>
    </div>
  );
}
