const express = require("express")
const router = express.Router();


module.exports = (db) => {
  router.get("/login", function (req, res) {
    res.send("testing.");
  });


  return router;
};
