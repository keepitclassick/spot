const express = require("express");
const router = express.Router();

module.exports = ({ getUsers, getUserByEmail, addUser }) => {
  /* GET users listing. */
  router.get("/", (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/", (req, res) => {
    const { name, email, phone_number, password, favourited_pets, location } =
      req.body;

    getUserByEmail(email)
      .then((user) => {
        if (user) {
          res.json("user already exists");
        } else {
          return addUser(
            name,
            email,
            phone_number,
            password,
            favourited_pets,
            location
          );
        }
      })
      .then((newUser) => res.json(newUser))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
