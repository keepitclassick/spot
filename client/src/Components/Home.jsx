import "./Home.scss"
import CarouselContainer from "./CarouselContainer";

export default function Home() {
  return (

    <>
      <CarouselContainer />
    {/* Slogan */}
    <section class="colored-section" id="cta">
    <div class="row">
    <h1 class="big-heading">See Spot. Adopt Spot. Love Spot.</h1>
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
        <section class="colored-section" id="features">

<div class="container-fluid">

  <div class="row">
    <div class="feature-box col-lg-4">
      <i class="icon fas fa-dog fa-8x"></i>
      <h3 class="feature-title">So easy to use, even your dog could do it.</h3>
    </div>

    <div class="feature-box col-lg-4">
      <i class="icon fas fa-paw fa-8x"></i>
      <h3 class="feature-title">We have all the pets, the greatest pets.</h3>
      
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
