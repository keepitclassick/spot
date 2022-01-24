import useState, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import PetList from "./PetList";
const axios = require("axios");


export default function Favourites() {

const petsFromLocalStorage = JSON.parse(localStorage.getItem("Favourites"));

  for (let pet of petsFromLocalStorage) {
    const img = pet.media[0].small;
    const description =
      pet.tags.length > 2
        ? `Hi! I'm ${pet.name} the ${pet.gender} ${pet.type}. Besides being adorable, I'm also 
${pet.tags[0]}, ${pet.tags[1]} and ${pet.tags[2]}.`
        : `Hi! I'm ${pet.name} the ${pet.gender} ${pet.type}. Besides being adorable, I'm also 
affectionate, adventurous and loyal.`;

    const kids =
      pet.environment.children === true
        ? "✅  Good with kids"
        : "🚫  Not appropriate for a home with children";
    const cats =
      pet.environment.cats === true
        ? "✅  Good with cats"
        : "🚫  Not appropriate for a home with cats";
    const dogs =
      pet.environment.dogs === true
        ? "✅  Good with dogs"
        : "🚫  Not appropriate for a home with dogs";

    const houseTrained =
      pet.attributes.house_trained === true
        ? "✅  House trained"
        : "🚫  Not house trained";

    const shotsCurrent =
      pet.attributes.shots_current === true
        ? "✅  Shots current"
        : "🚫  Shots not current";

    const spayedNeutered =
      pet.attributes.spayed_neutered === true
        ? "✅  Spayed/Neutered"
        : "🚫  Not Spayed or Neutered";

    const specialNeeds =
      pet.attributes.special_needs === true
        ? "✅  Special Needs"
        : "🚫  No Special Needs";

    return (
      <div className="pets__card" data-tesid="pets-comp">
        <div className="pets__card-box">
          <img src={img} alt="" />
          <span id="name">
            <h5>{pet.name}</h5>
          </span>
          <span>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h6>More about {pet.name}</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <h3>{`🏡${pet.contact.address.city}, ${pet.contact.address.state}`}</h3>
                  <h4>{`${pet.breeds} ${pet.type}`}</h4>
                  <h5>{`${description}`}</h5>
                  <br />
                  <u>
                    <b>Environment:</b>
                  </u>
                  <br />
                  {kids}
                  <br />
                  {cats}
                  <br />
                  {dogs}
                  <br />
                  <br />
                  <u>
                    <b>Good to know:</b>
                  </u>
                  <br />
                  {houseTrained}
                  <br />
                  {shotsCurrent}
                  <br />
                  {spayedNeutered}
                  <br />
                  {specialNeeds}
                  <div class="map"></div>
                  <a
                    href={`mailto:${pet.contact.email}?subject=Potential%20Adoption&body=I%20would%20like%20to%20have%20more%20information%20about%20${pet.name}.`}
                  >
                    <button class="btn btn-dark">Email Shelter</button>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </span>
        </div>
      </div>
    );
  }
}
