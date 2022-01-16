import form from "react-bootstrap/form";
import { adoptSearch } from "./helpers/adoptSearch";
import { useState } from "react";

export default function Adopt() {
  const [animal, setAnimal] = useState("");
  const [postal, setPostal] = useState("");
  const [distance, setDistance] = useState("10");

  return (
    <div class="container">
      <form id="pet-form">
        <div class="form-group"></div>
        <label for="animal">Animal</label>
        <select
          id="animal"
          class="form-control form-control-lg mb-3"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        >
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="bird">Bird</option>
          <option value="barnyard">Barnyard</option>
          <option value="rabbit">Rabbit</option>
        </select>
        <label for="postal">Location</label>
        <input
          type="text"
          id="postal"
          class="form-control form-control-lg"
          placeholder="Enter your City and Province"
          value={postal}
          onChange={(e) => setPostal(e.target.value)}
        />
        <label for="distance">Max Distance in Miles</label>
        <select
          id="distance"
          class="custom-select"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          required
        >
          type="text" name="distance"
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
        </select>
        <button type="submit" class="btn btn-primary" onsubmit={adoptSearch}>
          Sign in
        </button>
      </form>
    </div>
  );
}
