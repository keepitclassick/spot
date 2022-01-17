import { useState, useEffect } from "react";
import petFinder from "./helpers/petFinderAPI";
import PropTypes from "prop-types";
import { ANIMALS } from "@frontendmasters/pet";
import PetList from "./PetList";
import "./AdoptStyles.scss";

const SearchPets = ({
  pets = [],

  filterPets,
  filter,
  filterSize,
  size,
  gender,
  filterGender,
  limit,
  filterLimit,
}) => {
  const [petSize, petSizeSet] = useState(size);
  const [petFilter, petFilterSet] = useState(filter);
  const [petGender, petGenderSet] = useState(gender || "All");
  const [updatePets, setUpdatePets] = useState(pets || []);
  const [petLimit, setPetLimit] = useState(limit || "");

  const sizes = ["All", "Small", "Medium", "Large"];
  const genders = ["Unknown", "Male", "Female"];
  const limits = [20, 50, 100];
  const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join("").toLowerCase(); // eslint-disable-line

  async function petsRequest() {
    const { animals } = await petFinder.animal
      .search({
        type: petFilter,
        gender: petGender,
        size: petSize,
        limit: petLimit,
      })
      .then((data) => data.data)
      .catch((error) => error);

    setUpdatePets(animals);
    filterPets(petFilter);
    filterSize(petSize);
    filterGender(petGender);
    filterLimit(limit);
  }

  const onFilterChange = (e) => {
    const { value } = e.target;
    petFilterSet(value);
  };

  const onSizeChange = (e) => {
    const { value } = e.target;
    petSizeSet(value);
  };

  const onGenderChange = (e) => {
    const { value } = e.target;
    petGenderSet(value);
  };

  const onLimitChange = (e) => {
    const { value } = e.target;
    setPetLimit(value);
  };
  useEffect(async () => {
    const { animals } = await petFinder.animal
      .search({
        type: "",
        gender: "",
        size: "",
        limit: "",
      })
      .then((res) => res.data);

    setUpdatePets(animals);
  }, []);

  return (
    <div className="main__wrapper" data-testid="search-pets-id">
      <div className="search__form__wrapper">
        <form
          data-testid="search-pets-form"
          className="search__form__wrapper-form"
          onSubmit={(e) => {
            e.preventDefault();
            petsRequest();
          }}
        >
          <div className="search__form__wrapper-form-box">
            <label htmlFor="id-1">
              Animal
              <select value={petFilter} onChange={onFilterChange}>
                <option>Select</option>
                {ANIMALS.map((option) => (
                  <option value={option} key={option}>
                    {capitalize(option)}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="id-2">
              Size
              <select value={petSize} onChange={onSizeChange}>
                <option>Select</option>
                {sizes.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="id-3">
              Gender
              <select value={petGender} onChange={onGenderChange}>
                <option>Select</option>
                {genders.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Limit
              <select value={petLimit} onChange={onLimitChange}>
                <option>Select</option>
                {limits.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button type="submit">Find Pet</button>
        </form>
      </div>

      <PetList pets={updatePets} />
    </div>
  );
};

SearchPets.propTypes = {
  pets: PropTypes.array, // eslint-disable-line
  fetchPets: PropTypes.func,
  filter: PropTypes.string,
  filterPets: PropTypes.func,
  filterSize: PropTypes.func,
  filterGender: PropTypes.func,
  size: PropTypes.string,
  gender: PropTypes.string,
};

SearchPets.defaultProps = {
  pets: [],
  fetchPets: null,
  filter: "All",
  filterPets: null,
  filterSize: null,
  filterGender: null,
  size: "All",
  gender: "All",
};

export default SearchPets;
