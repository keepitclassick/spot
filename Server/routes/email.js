const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", () => {
  resizeBy.send("Welcome to my email form");
});

router.post("/api/email", (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: `${req.body.values.email}`,
    subject: `Message from: ${process.env.EMAIL}`,
    html: `
  <h3>Information</h3>
  <ul>
  <li>Name: ${req.body.values.name}</li>
  <li>Email: ${req.body.values.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.values.message}</p>
  `,
  };
  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Success! Message sent!");
    }
  });
  transporter.close();
});

module.exports = router;
