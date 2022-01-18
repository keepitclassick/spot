import React from "react";
import PropTypes from "prop-types";
import "./AdoptStyles.scss";

const Pet = ({
  id,
  name,
  media,
  description,
  breed,
  location,
  distance,
  good_with_children,
  good_with_dogs,
  good_with_cats,
  sort,
  url,
}) => {
  let img = media[0].medium;

  return (
    <div className="pets__card" data-tesid="pets-comp">
      <div className="pets__card-box">
        <img src={img} alt="" />
        <span id="name">{name}</span>
        <span>
          <a href={url} class="btn btn-dark">
            Meet {name}
          </a>
        </span>
      </div>
    </div>
  );
};

Pet.propTypes = {
  name: PropTypes.string,
  media: PropTypes.array, // eslint-disable-line
  id: PropTypes.number,
};

Pet.defaultProps = {
  name: "",
  media: [],
  id: "",
  age: "",
  location: "",
  distance: "",
  sort: "",
  url: "",
  good_with_children: "",
  good_with_dogs: "",
  good_with_cats: "",
};

export default Pet;
