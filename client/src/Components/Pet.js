import React from "react";
import PropTypes from "prop-types";
import "./AdoptStyles.scss";
import { Accordion } from "react-bootstrap";

const Pet = ({
  id,
  name,
  media,
  breed,
  location,
  distance,
  good_with_children,
  good_with_dogs,
  good_with_cats,
  sort,
  url,
  tags,
  type,
  gender,
}) => {
  let img = media[0].medium;
  let description =
    tags.length > 2
      ? `Hi! I'm ${name} the ${gender} ${type}. Besides being adorable, I'm also 
${tags[0]}, ${tags[1]} and ${tags[2]}.`
      : `Hi! I'm ${name} the ${gender} ${type}. Besides being adorable, I'm also 
affectionate, adventurous and loyal.`;

  return (
    <div className="pets__card" data-tesid="pets-comp">
      <div className="pets__card-box">
        <img src={img} alt="" />
        <span id="name">{name}</span>
        <span>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>More about {name}</Accordion.Header>
              <Accordion.Body>{description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
  description: "",
  location: "",
  distance: "",
  sort: "",
  url: "",
  good_with_children: "",
  good_with_dogs: "",
  good_with_cats: "",
  type: "",
  gender: "",
};

export default Pet;
