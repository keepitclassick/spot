const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.get('/', () => {
resizeBy.send('Welcome to my email form')
});

app.post('/api/email', (req, res) => {
let data = req.body
let smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  port:465,
  auth:{
    user: 'desireemendes@icloud.com',
    pass: 'nice-try'
  }
});

let mailOptions = {
  from:data.email,
  to: 'desireemendes@icloud.com',
  subject: `Message from ${data.name}`,
  html: `
  <h3>Information</h3>
  <ul>
  <li>Name: ${data.name}</li>
  <li>Email: ${data.email}</li>
  </ul>

  <h3>Message</h3>
  <p>${data.message}</p>
  `

}
})