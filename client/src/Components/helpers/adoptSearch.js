export function adoptSearch() {
  const petForm = document.querySelector("#pet-form");

  if (petForm) {
    petForm.addEventListener("click", fetchAnimals, true);
    console.log("button click");
  }

  // fetch animals from API
  function fetchAnimals(e) {
    e.preventDefault();

    // Get user Input
    const animal = document.querySelector("#animal").value;
    const postal = document.querySelector("#postal").value;
    const children = document.querySelector("#children").value;
    const distance = document.querySelector("#distance").value;

    //fetch pets with params
    let key = "OanpmtASRlwDwMvkH1Rsw2N8SfixafCEGEJJrJzDQ15QIpxxAB";
    let secret = "oJ9EzbNdeasw6WlLZIBpXEBYy160mls11FibZ330";
    let token;

    // get authorization token
    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        key +
        "&client_secret=" +
        secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        token = data.access_token;
      })
      .then(() => {
        // use token to fetch animals
        fetch(
          `https://api.petfinder.com/v2/animals?type=${animal}&location=${postal}&distance=${distance}&good_with_children${children}`,
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => showAnimals(data.animals));
      })
      .catch((err) => console.error(err));
  }

  // show listings of pets
  function showAnimals(pets) {
    const results = document.querySelector("#results");

    // clear results first
    results.innerHTML = "";

    // loop through pets
    pets.forEach((pet) => {
      /* console.log(pet); */
      // create elements
      const div = document.createElement("div");
      div.classList.add("card", "card-body", "mb-3");
      div.innerHTML = `
      <div class="row">
        <div class="col-sm-6">
          <h4>${pet.name} (${pet.age})</h4>
          <p class="text-secondary">${pet.breeds.primary}</p>
          <p>${pet.contact.address.city}, ${pet.contact.address.state} ${
        pet.contact.address.postcode
      }</p>
          <ul class="list-group">
            <li class="list-group-item">${
              pet.contact.phone
                ? `<li class="list-group-item">Phone: ${pet.contact.phone}</li>`
                : ``
            }</li>
            ${
              pet.contact.email
                ? `<li class="list-group-item">Email: ${pet.contact.email}</li>`
                : ``
            }
            <li class="list-group-item">Shelter ID: ${pet.organization_id}</li>
            <li class="list-group-item">Good with Kids: ${
              pet.environment.children === true
                ? "Good with kids"
                : "Not suitable for a home with kids."
            }</li>
          </ul>
        
        </div>
        <div class="col-sm-6">
        <img class="img-circle mt-2" src="${
          pet.photos[0] ? pet.photos[0].medium : ""
        }">
        </div>
      </div>
    `;
      results.appendChild(div);
    });
  }
}
