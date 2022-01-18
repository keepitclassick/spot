import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function Banner() {
  return (
    <div class="row">
      <div class="col-md-4">
        <a href="/adopt">
          <Image
            className="my-auto"
            src={"./images/653F5334-CE6F-4C4C-8355-7F7C15D538E0_4_5005_c.jpeg"}
            fluid
          />
        </a>
      </div>
      <div class="col-md"></div>
      <div class="col-md-6">
        <a href="/login">
          <Image
            className="mx-auto"
            src={"./images/F6DCA019-89B6-4F5E-B5B2-5559FC36E363_4_5005_c.jpeg"}
            fluid
          />
        </a>
      </div>
    </div>
  );
}
