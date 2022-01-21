import Image from "react-bootstrap/Image";

export default function Morepets() {
  return (
    <div class="row">
      <div class="col-sm-4">
        <a href="/adopt">
          <Image
            className="my-auto"
            src={"./images/653F5334-CE6F-4C4C-8355-7F7C15D538E0_4_5005_c.jpeg"}
            fluid
          />
        </a>
      </div>
      <div class="col-sm-4"></div>
      <div class="col-sm-4"></div>
    </div>
  );
}
