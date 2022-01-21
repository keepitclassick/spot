import "./Home.scss";
import { Fragment } from "react";
import { Carousel } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
    {/* Slogan */}
    <div class="row">

        <div class="col-lg-6">
          <h1 class="big-heading">See spot. Love spot. Adopt spot.</h1>
        </div>
        </div>

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


   </>
  );
}
