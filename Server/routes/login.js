const express = require("express")
const router = express.Router();


module.exports = (db) => {
  router.get("/", function (req, res) {
    res.send("testing route");
  });

  const getUserWithEmail = function (email) {
    return db
      .query(`SELECT * FROM users WHERE email = $1`)
      .then((result) => {
        return result.rows[0];
      })
      .catch((err) => {
        return null;
      });
  };
  exports.getUserWithEmail = getUserWithEmail;

  const login = function (userEmail, userPassword) {
    return getUserWithEmail(userEmail).then((user) => {
      if (!user) {
       return null 
       }
      if (userPassword, user.password) {
        return user;
      }; 
    });
  };
  exports.login = login;

 router.post("/", function (req, res) {
   const { email, password } = req.body;
   login(email, password).then((user) => {
     console.log("------", email)
   })
 })
 
  return router;
};