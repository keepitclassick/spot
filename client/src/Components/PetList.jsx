import PropTypes from "prop-types";
import Pet from "./Pet";
import { React, useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const petsFromLocalStorage = JSON.parse(localStorage.getItem("Favourites"));

const PetsList = ({ pets, loading }) => {
  const [favourites, setFavourites] = useState(petsFromLocalStorage || []);

  useEffect(() => {
    localStorage.setItem("Favourites", JSON.stringify(favourites));
  }, [favourites]);
  return (
    <div>
      <div className="pets__wrapper" data-testid="pets-list-id">
        {loading ? (
          <>
            <h1 className="loading__wrapper">Spot is fetching... </h1>
            <img src="./images/image.gif" />
          </>
        ) : null}
        {!loading && pets.length === 0 ? (
          <h1 className="loading__wrapper">No pets Found</h1>
        ) : (
          pets.map((pet) => (
            <Pet
              id={pet.id}
              name={pet.name}
              key={pet.id}
              media={pet.photos}
              description={pet.description}
              location={pet.location}
              url={pet.url}
              type={pet.type}
              breeds={pet.breeds.primary}
              species={pet.species}
              size={pet.size}
              environment={pet.environment}
              tags={pet.tags}
              gender={pet.gender}
              contact={pet.contact}
              attributes={pet.attributes}
              favourites={favourites}
              setFavourites={setFavourites}
              organization_id={pet.organization_id}
            />
          ))
        )}
      </div>
    </div>
  );
};
PetsList.propTypes = {
  pets: PropTypes.array, // eslint-disable-line
};

PetsList.defaultProps = {
  pets: [],
};

export default PetsList;
