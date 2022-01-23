import { react, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./AdoptStyles.scss";
import { Accordion } from "react-bootstrap";
import Axios from "axios";

export default function Pet({
  id,
  name,
  media,
  breeds,
  location,
  distance,
  sort,
  url,
  tags,
  type,
  gender,
  contact,
  environment,
  attributes,
  setFavourites,
  favourites,
}) {
  const [favPet, setFavPet] = useState(false);

  const favPetDetails = {
    id,
    name,
    media,
    breeds,
    location,
    distance,
    sort,
    url,
    tags,
    type,
    gender,
    contact,
    environment,
    attributes,
  };
  const addFavouritePet = (Pet) => {
    const newFavList = [...favourites, Pet];
    setFavourites(newFavList);
    setFavPet(Pet);

    const user = localStorage.getItem("userID");

    const data = {
      favourited_pets: favPet,
      id: user.id,
    };

    Axios.put("http://localhost:3001/api/users/", { data }).then((res) => {
      alert("update made");
    });
  };
  if (!id) return "no user!";

  const img = media[0].medium;
  const description =
    tags.length > 2
      ? `Hi! I'm ${name} the ${gender} ${type}. Besides being adorable, I'm also 
${tags[0]}, ${tags[1]} and ${tags[2]}.`
      : `Hi! I'm ${name} the ${gender} ${type}. Besides being adorable, I'm also 
affectionate, adventurous and loyal.`;

  const kids =
    environment.children === true
      ? "✅  Good with kids"
      : "🚫  Not appropriate for a home with children";
  const cats =
    environment.cats === true
      ? "✅  Good with cats"
      : "🚫  Not appropriate for a home with cats";
  const dogs =
    environment.dogs === true
      ? "✅  Good with dogs"
      : "🚫  Not appropriate for a home with dogs";

  const houseTrained =
    attributes.house_trained === true
      ? "✅  House trained"
      : "🚫  Not house trained";

  const shotsCurrent =
    attributes.shots_current === true
      ? "✅  Shots current"
      : "🚫  Shots not current";

  const spayedNeutered =
    attributes.spayed_neutered === true
      ? "✅  Spayed/Neutered"
      : "🚫  Not Spayed or Neutered";

  const specialNeeds =
    attributes.special_needs === true
      ? "✅  Special Needs"
      : "🚫  No Special Needs";

  return (
    <>
      <div className="pets__card" data-tesid="pets-comp">
        <div className="pets__card-box">
          <img src={img} alt="" />
          <span id="name">
            <h5>{name}</h5>

            {favPet ? (
              <button id="notfav" class="btn" onClick={() => setFavPet(false)}>
                <i class="fab fa-gratipay"></i>
              </button>
            ) : (
              <button
                id="favourite"
                class="btn"
                onClick={() => addFavouritePet(favPetDetails)}
              >
                <i class="fab fa-gratipay"></i>
              </button>
            )}
          </span>
          <span>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>More about {name}</Accordion.Header>
                <Accordion.Body>
                  <h3>{`🏡${contact.address.city}, ${contact.address.state}`}</h3>
                  <h4>{`${breeds} ${type}`}</h4>
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
                    href={`mailto:${contact.email}?subject=Potential%20Adoption&body=I%20would%20like%20to%20have%20more%20information%20about%20${name}.`}
                  >
                    <button class="btn btn-dark">Email Shelter</button>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </span>
        </div>
      </div>
    </>
  );
}
Pet.propTypes = {
  name: PropTypes.string,
  media: PropTypes.array, // eslint-disable-line
  id: PropTypes.number,
};

Pet.defaultProps = {
  name: "",
  media: [],
  id: null,
  age: "",
  description: "",
  location: "",
  distance: "",
  sort: "",
  url: "",
  type: "",
  gender: "",
  breeds: "",
  environment: "",
};
