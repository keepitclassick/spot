const express = require("express");
const router = express.Router();

module.exports = (addUserFavourite) => {
  router.get("/", (req, res) => {
    res.send;
  });

  router.post("/", (req, res) => {
    const { users_id, pets_id } = req.body;

    () =>
      addUserFavourite(users_id, pets_id)
        .then((res) => {
          res.send(res);
        })
        .catch((err) =>
          res.json({
            error: err.message,
          })
        );
  });
  return router;
};
