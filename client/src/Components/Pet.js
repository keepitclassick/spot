import React from "react";
import PropTypes from "prop-types";

const Pet = ({
  id,
  name,
  media,
  description,
  breed,
  location,
  distance,
  good_with_kids,
  sort,
}) => {
  let img = "https://loremflickr.com/300/300 ";

  if (media.length !== 0) {
    img = media[0].medium;
  }

  return (
    <div className="pets__card" data-tesid="pets-comp">
      <div className="pets__card-box">
        <img src={img} alt="" />
        <span>{name}</span>
        <span>
          <button type="submit">Submit</button>
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
};

export default Pet;
