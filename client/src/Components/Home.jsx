import "./Home.scss";
import CarouselContainer from "./CarouselContainer";

export default function Home() {
  return (
    <>
      <div class="col-md"></div>
      <CarouselContainer />
      <div class="col-md"></div>
      {/* Slogan */}
      <section class="colored-section" id="cta">
        <div class="row">
          <h1 class="big-heading">
            See Spot. &nbsp;&nbsp;&nbsp;&nbsp;Adopt Spot.
            &nbsp;&nbsp;&nbsp;&nbsp;Love Spot.
          </h1>
        </div>

        {/* Pet cards */}

        <div class="row-md"></div>

        <div id="examplepets" class="row-md-6">
          <div class="card-group">
            <div class="card">
              <img
                class="card-img-top"
                src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43172437/1/?bust=1641308988&width=720"
                height="500px"
                width="300px"
                alt="black dog"
              />
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54366189/2/?bust=1643077726&width=720"
                height="500px"
                width="300px"
                alt="black and white cat"
              />
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52079112/4/?bust=1630939380&width=720&height=300"
                height="500px"
                width="300px"
                alt="orange cat"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section class="colored-section" id="features">
        <div class="container-fluid">
          <div class="row">
            <div class="feature-box col-lg-4">
              <i class="icon fas fa-dog fa-8x"></i>
              <h3 class="feature-title">
                So easy to use, even your dog could do it.
              </h3>
            </div>

            <div class="feature-box col-lg-4">
              <i class="icon fas fa-paw fa-8x"></i>
              <h3 class="feature-title">
                We have all the pets, the greatest pets.
              </h3>
            </div>

            <div class="feature-box col-lg-4">
              <i class="icon fas fa-cat fa-8x"></i>
              <h3 class="feature-title">Fall in love with our pets today.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section class="white-section" id="cta">
        <div class="container-fluid">
          <h3 class="big-heading">Find a pet to adopt today</h3>
        </div>
      </section>
    </>
  );
}
