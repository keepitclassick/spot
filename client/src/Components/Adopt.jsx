import { useState, useEffect } from "react";
import petFinder from "./helpers/petFinderAPI";
import PropTypes from "prop-types";
import { ANIMALS } from "@frontendmasters/pet";
import PetList from "./PetList";
import "./AdoptStyles.scss";

const petsFromLocalStorage = JSON.parse(localStorage.getItem("Favourites"));

const SearchPets = ({ pets = [], gender, sortType }) => {
  const [petSize, setPetSize] = useState("large");
  const [petFilter, setPetFilter] = useState("dog");
  const [petGender, setPetGender] = useState(gender || "female");
  const [updatePets, setUpdatePets] = useState([]);
  const [petLimit, setPetLimit] = useState("20");
  const [petLocation, setPetLocation] = useState("");
  const [petDistance, setDistance] = useState("100");
  const [sort, setSort] = useState(sortType || "distance");
  const [goodWithKids, setGoodWithKids] = useState("true");
  const [goodWithDogs, setGoodWithDogs] = useState("true");
  const [goodWithCats, setGoodWithCats] = useState("false");
  const [favourites, setFavourites] = useState(petsFromLocalStorage);
  const [loading, setLoading] = useState(false);

  const sizes = ["Small", "Medium", "Large"];
  const genders = ["Male", "Female"];
  const limits = [20, 50, 100];
  const distanceList = [
    "10",
    "20",
    "30",
    "40",
    "50",
    "60",
    "70",
    "80",
    "90",
    "100",
    "200",
    "300",
    "400",
    "500",
  ];
  const sortBy = ["recent", "distance"];
  const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join("").toLowerCase(); // eslint-disable-line

  async function petsRequest() {
    const { animals } = await petFinder.animal
      .search({
        type: petFilter,
        gender: petGender,
        size: petSize,
        limit: petLimit,
        location: petLocation,
        distance: petDistance,
        sort: sort,
        good_with_children: goodWithKids,
        good_with_cats: goodWithDogs,
        good_with_dogs: goodWithCats,
      })
      .then(setLoading(true))
      .then((data) => data.data)
      .catch((error) => error);

    setLoading(false);
    setUpdatePets(animals);
  }

  const onFilterChange = (e) => {
    const { value } = e.target;
    setPetFilter(value);
  };

  const onSizeChange = (e) => {
    const { value } = e.target;
    setPetSize(value);
  };

  const onGenderChange = (e) => {
    const { value } = e.target;
    setPetGender(value);
  };

  const onLimitChange = (e) => {
    const { value } = e.target;
    setPetLimit(value);
  };

  const onLocationChange = (e) => {
    const { value } = e.target;
    setPetLocation(value);
  };

  const onDistanceChange = (e) => {
    const { value } = e.target;
    setDistance(value);
  };

  const onSortChange = (e) => {
    const { value } = e.target;
    setSort(value);
  };

  const onGoodWithKidsChange = (e) => {
    const { value } = e.target;
    setGoodWithKids(value);
  };

  const onGoodWithDogsChange = (e) => {
    const { value } = e.target;
    setGoodWithDogs(value);
  };

  const onGoodWithCatsChange = (e) => {
    const { value } = e.target;
    setGoodWithCats(value);
  };

  useEffect(async () => {
    const { animals } = await petFinder.animal
      .search({
        type: "",
        gender: "",
        size: "",
        limit: "",
        location: "",
      })

      .then((res) => res.data);

    setUpdatePets(animals);
  }, []);

  useEffect(() => {
    localStorage.setItem("Favourites", JSON.stringify(favourites));
  }, [favourites]);

  {
    return (
      <div className="main__wrapper" data-testid="search-pets-id">
        <img
          id="adopt-header"
          src="https://i.ibb.co/cLf3RnK/e-Bay-Store-Billboard-1280x290-px.jpg"
        />
        <div id="search-form" className="search__form__wrapper">
          <form
            data-testid="search-pets-form"
            className="search__form__wrapper-form"
            onSubmit={(e) => {
              e.preventDefault();
              petsRequest();
            }}
          >
            <div className="search__form__wrapper-form-box">
              <label>
                Location
                <input
                  class="form-control  form-control-sm"
                  type="text"
                  placeholder="Postal Code"
                  value={petLocation}
                  onChange={onLocationChange}
                />
              </label>

              <label>
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
              <label>
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

              <label>
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
                Distance(miles)
                <select value={petDistance} onChange={onDistanceChange}>
                  <option>Select</option>

                  {distanceList.map((option) => (
                    <option value={option} key={option}>
                      {capitalize(option)}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Sort By
                <select value={sort} onChange={onSortChange}>
                  <option>Select</option>
                  {sortBy.map((option) => (
                    <option value={option} key={option}>
                      {capitalize(option)}
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

              <label>
                Kids?
                <select value={goodWithKids} onChange={onGoodWithKidsChange}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
              <label>
                Cats?
                <select value={goodWithDogs} onChange={onGoodWithDogsChange}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
              <label>
                Dogs?
                <select value={goodWithCats} onChange={onGoodWithCatsChange}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
            </div>

            <button type="submit">Find Pet</button>
          </form>
        </div>

        <PetList pets={updatePets} loading={loading} />
      </div>
    );
  }
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
  size: "All",
  gender: "All",
};

export default SearchPets;
