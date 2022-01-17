import React from "react";
import PropTypes from "prop-types";

const Pet = ({ id, name, media, description, breed }) => {
  let pic = "https://via.placeholder.com/300";

  if (media.length !== 0) {
    pic = media[0].medium;
  }
  return (
    <div className="pets__card" data-tesid="pets-comp">
      <div className="pets__card-box">
        <img src={pic} alt="" />
        <span>{name}</span>
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
};

export default Pet;
