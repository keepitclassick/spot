import "./Home.scss";
import { Fragment } from "react";
import { Carousel } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
    {/* Slogan */}
    <section class="colored-section" id="cta">
    <div class="row">

        <div class="col-lg-6">
          <h1 class="big-heading">See spot. Love spot. Adopt spot.</h1>
        </div>
        </div>
        {/* Pet cards */}

        <div class="row-md"></div>

<div id="examplepets" class="row-md-6">
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
  </div>
  

        </section>

        {/* Features */}
        <section class="white-section" id="features">

<div class="container-fluid">

  <div class="row">
    <div class="feature-box col-lg-4">
      <i class="icon fas fa-check-circle fa-4x"></i>
      <h3 class="feature-title">Easy to use.</h3>
      {/* <p>So easy to use, even your dog could do it.</p> */}
    </div>

    <div class="feature-box col-lg-4">
      <i class="icon fas fa-bullseye fa-4x"></i>
      <h3 class="feature-title">Elite Clientele</h3>
      <p>We have all the pets, the greatest pets.</p>
    </div>

    <div class="feature-box col-lg-4">
      <i class="icon fas fa-heart fa-4x"></i>
      <h3 class="feature-title">Guaranteed to love.</h3>
      <p>Fall in love with our pets today.</p>
    </div>
  </div>
</div>
</section>

{/* Call to action */}
<section class="colored-section" id="cta">

<div class="container-fluid">
  <h3 class="big-heading">Find a pet to adopt today</h3>
</div>
</section>





   </>
  );
}
