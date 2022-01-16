export default function Adopt() {
  return (
    <div class="container">
      <form id="pet-form">
        <div class="form-group"></div>
        <label for="animal">Animal</label>
        <select id="animal" class="form-control form-control-lg mb-3">
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="bird">Bird</option>
          <option value="barnyard">Barnyard</option>
          <option value="rabbit">Rabbit</option>
        </select>

        <input
          type="text"
          id="postal"
          class="form-control form-control-lg"
          placeholder="Enter your City and Province"
        />
        <label for="distance">Max Distance in Miles</label>
        <select id="distance" class="form-control form-control-lg mb-3">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <input
            id="submit"
            type="submit"
            value="Find"
            class="btn btn-dark btn-lg btn-block mt-3"
          />
        </select>
      </form>
    </div>
  );
}
