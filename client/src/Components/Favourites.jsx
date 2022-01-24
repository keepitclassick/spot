import useState from "react";
import PetList from "./PetList";
const axios = require("axios");

export default function Favourites({ id }) {
  axios.get("http://localhost:3001/api/favourites").then((resp) => {
    for (let i = 0; i < resp.data.length; i++) {
      console.log(resp.data);
      const petData = resp.data.pet_details;
    }
  });
  return (
    <>
      <div>Favourites</div>
    </>
  );
}
