import { Accordion } from "react-bootstrap";
const axios = require("axios");

export default function Favourites() {
  let petsFromLocalStorage = JSON.parse(localStorage.getItem("Favourites"));
  if (!petsFromLocalStorage) {
    return <h1>Go check out the adopt page to find your favourites!</h1>;
  } else {
    return (
      <div className="pet">
        <h1>Favourites</h1>
        <div className="pets__wrapper" data-testid="pets-list-id">
          {Object.keys(petsFromLocalStorage).map(function (key) {
            const img = petsFromLocalStorage[key].media[0].medium;
            const description =
              petsFromLocalStorage[key].tags.length > 2
                ? `Hi! I'm ${petsFromLocalStorage[key].name} the ${petsFromLocalStorage[key].gender} ${petsFromLocalStorage[key].type}. Besides being adorable, I'm also 
    ${petsFromLocalStorage[key].tags[0]}, ${petsFromLocalStorage[key].tags[1]} and ${petsFromLocalStorage[key].tags[2]}.`
                : `Hi! I'm ${petsFromLocalStorage[key].name} the ${petsFromLocalStorage[key].gender} ${petsFromLocalStorage[key].type}. Besides being adorable, I'm also 
    affectionate, adventurous and loyal.`;

            const kids =
              petsFromLocalStorage[key].environment.children === true
                ? "✅  Good with kids"
                : "🚫  Not appropriate for a home with children";
            const cats =
              petsFromLocalStorage[key].environment.cats === true
                ? "✅  Good with cats"
                : "🚫  Not appropriate for a home with cats";
            const dogs =
              petsFromLocalStorage[key].environment.dogs === true
                ? "✅  Good with dogs"
                : "🚫  Not appropriate for a home with dogs";

            const houseTrained =
              petsFromLocalStorage[key].attributes.house_trained === true
                ? "✅  House trained"
                : "🚫  Not house trained";

            const shotsCurrent =
              petsFromLocalStorage[key].attributes.shots_current === true
                ? "✅  Shots current"
                : "🚫  Shots not current";

            const spayedNeutered =
              petsFromLocalStorage[key].attributes.spayed_neutered === true
                ? "✅  Spayed/Neutered"
                : "🚫  Not Spayed or Neutered";

            const specialNeeds =
              petsFromLocalStorage[key].attributes.special_needs === true
                ? "✅  Special Needs"
                : "🚫  No Special Needs";

            return (
              <>
                <tr key={key}>
                  <div className="pets__card" data-tesid="pets-comp">
                    <div className="pets__card-box">
                      <img src={img} alt="" />
                      <span id="name">
                        <h5>{petsFromLocalStorage[key].name}</h5>

                        <button id="favourite" class="btn">
                          <i class="fas fa-heart"></i>
                        </button>
                      </span>
                      <span>
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <h6>
                                More about {petsFromLocalStorage[key].name}
                              </h6>
                            </Accordion.Header>
                            <Accordion.Body>
                              <h3>{`🏡${petsFromLocalStorage[key].contact.address.city}, ${petsFromLocalStorage[key].contact.address.state}`}</h3>
                              <h4>{`${petsFromLocalStorage[key].breeds} ${petsFromLocalStorage[key].type}`}</h4>

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
                                href={`mailto:${petsFromLocalStorage[key].contact.email}?subject=Potential%20Adoption&body=I%20would%20like%20to%20have%20more%20information%20about%20${petsFromLocalStorage[key].name}.`}
                              >
                                <button class="btn btn-dark">
                                  Email Shelter
                                </button>
                              </a>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </span>
                    </div>
                  </div>
                </tr>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
