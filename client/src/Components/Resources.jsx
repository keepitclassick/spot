import React, { Fragment } from "react"
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
  <img class="card-img-top" src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Card image cap"
  height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Socializing Cats</h5>
    <p class="card-text">Some tips on socializing your shy or fearful cats.</p>
    <a href="https://resources.bestfriends.org/article/how-socialize-very-shy-or-fearful-cats" class="btn btn-warning">Check out this article</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div class="card border-warning mb-3">
  <img class="card-img-top" src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxkb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Card image cap"
  height="300px" />
  <div class="card-body">
    <h5 class="card-title">Spay/Neuter Your Dog</h5>
    <p class="card-text">Should you spay or neuter your dog? Make an informed decision.</p>
    <a href="https://resources.bestfriends.org/article/spay-neuter-your-dog" class="btn btn-warning">Check out this article</a>
  </div>
</div>
    </div>
    <div className="col-sm">
     <div class="card border-warning mb-3">
  <img class="card-img-top" src="https://images.unsplash.com/photo-1516139008210-96e45dccd83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Card image cap"
  height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Should I adopt?</h5>
    <p class="card-text">Unsure about adopting? Here's some reassurance </p>
    <a href="https://resources.bestfriends.org/article/reasons-adopt-pet" class="btn btn-warning">Check out this article</a>
  </div>
</div>
    </div>
  </div>
</div>
    </React.Fragment>
  )

 
}