import "./HomepagePets.scss";

export default function HomepagePets() {
  return (
    <div id="home-background">
      <div class="slogan">See spot. Love spot. Adopt spot.</div>
      <div class="row">
        <div class="col-md"></div>

        <div class="col-md"></div>

        <div id="examplepets" class="col-md-6">
          <div class="card-group">
            <div class="card">
              <img
                class="card-img-top"
                src="./images/petexample1.jpeg"
                height="fit-content"
                alt="black dog"
              />
              <div class="card-body">
                <h5 class="card-title">Sausage</h5>
                <p class="card-text">
                  Sausage is around 4 to 5 years old and 17 pounds. She is very
                  social with people and other dogs. She is playful but not
                  hyper.
                </p>
              </div>
              <div class="card-footer text-center"></div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="./images/examplepet2.jpeg"
                height="fit-content"
                alt="black and white cat"
              />
              <div class="card-body">
                <h5 class="card-title">Lester Sylvester</h5>
                <p class="card-text">
                  Sweet and intelligent, he is a responsive lad. When you are
                  speaking to him, he will chat you back. Sylvester has
                  personality!
                </p>
              </div>
              <div class="card-footer text-center"></div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="./images/petexample3.jpeg"
                height="fit-content"
                alt="orange cat"
              />
              <div class="card-body">
                <h5 class="card-title">Gingerbread</h5>
                <p class="card-text">
                  This playful boy loves plush toys and sparkly balls. He enjoys
                  chasing his siblings and cuddling with his foster dad.
                </p>
              </div>
              <div class="card-footer text-center"></div>
            </div>
          </div>

          <div class="col-md"></div>
        </div>
      </div>
    </div>
  );
}
