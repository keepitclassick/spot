const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require("dotenv").config();
// router.get('/', () => {
// resizeBy.send('Welcome to my email form')
// });
module.exports = () => {
  router.post('/', (req, res) => {
    console.log("inside event handler")
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    port:465,
    auth:{
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
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
    `
  }
  transporter.sendMail(mailOptions, (err, response) => {
  if(err) {
    res.send(err)
    console.log("Error happened in send email", err)
  } else {
    res.send('Success! Message sent!')
    console.log("Message sent")
  }
  })
  transporter.close();
  
  
  })
  
  return router;
  }