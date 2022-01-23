const express = require("express");
const router = express.Router();

module.exports = ({ findUsersFavourites, addUserFavourite, findUserByID }) => {
  router.get("/", (req, res) => {
    findUsersFavourites()
      .then((usersFavourites) => {
        res.json(usersFavourites);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/", (req, res) => {
    const { users_id, pets_id, shelters_id } = req.body;
    findUserByID(users_id)
      .then((res) => {
        return addUserFavourite(users_id, pets_id, shelters_id);
      })
      .then((newFav) => res.json(newFav));
  });
  return router;
};
