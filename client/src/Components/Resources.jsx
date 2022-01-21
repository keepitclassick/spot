import React, { Fragment } from "react";
import "./Resources.scss";

export default function Resources() {
  return (
    <React.Fragment>
      <div className="title">
        <h1>Resources</h1>
      </div>
      <div class="container">
        <div className="row">
          <div className="col-sm">
            <div class="card border-warning mb-3">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Card image cap"
                height="300px"
              />
              <div class="card-body">
                <h5 class="card-title">Socializing Cats</h5>
                <p class="card-text">
                  Some tips on socializing your shy or fearful cats.
                </p>
                <a
                  href="https://resources.bestfriends.org/article/how-socialize-very-shy-or-fearful-cats"
                  class="btn btn-warning"
                >
                  Check out this article
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card border-warning mb-3">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="Card image cap"
                height="300px"
              />
              <div class="card-body">
                <h5 class="card-title">Spay/Neuter Your Dog</h5>
                <p class="card-text">
                  Should you spay or neuter your dog? Learn more.
                </p>
                <a
                  href="https://resources.bestfriends.org/article/spay-neuter-your-dog"
                  class="btn btn-warning"
                >
                  Check out this article
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card border-warning mb-3">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1516139008210-96e45dccd83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Card image cap"
                height="300px"
              />
              <div class="card-body">
                <h5 class="card-title">Should I adopt?</h5>
                <p class="card-text">
                  Unsure about adopting? Here's some reassurance{" "}
                </p>
                <a
                  href="https://resources.bestfriends.org/article/reasons-adopt-pet"
                  class="btn btn-warning"
                >
                  Check out this article
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div className="row">
          <div className="col-sm">
            <div class="card border-warning mb-3">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt="Card image cap"
                height="300px"
              />
              <div class="card-body">
                <h5 class="card-title">
                  10 Reasons Adopting a shelter dog is the best thing you will
                  ever do
                </h5>
                <p class="card-text"></p>
                <a
                  href="https://www.dogtales.ca/10-reasons-why-adopting-a-dog-will-be-the-best-decision-youve-ever-made"
                  class="btn btn-warning"
                >
                  Check out this article
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card border-warning mb-3">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1508675801627-066ac4346a61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80"
                alt="Card image cap"
                height="300px"
              />
              <div class="card-body">
                <h5 class="card-title">
                  How the covid pet adoption boom is reducing stress
                </h5>
                <p class="card-text"></p>
                <a
                  href="https://theconversation.com/how-the-coronavirus-pet-adoption-boom-is-reducing-stress-138074"
                  class="btn btn-warning"
                >
                  Check out this article
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card border-warning mb-3">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1617691763432-8b45e6748b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
                alt="Card image cap"
                height="300px"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Considerations to make before adopting an exotic animal
                </h5>
                <p class="card-text"></p>
                <a
                  href="https://www.canadianveterinarians.net/documents/recommendations-for-adopting-an-exotic-pet"
                  class="btn btn-warning"
                >
                  Check out this article
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
