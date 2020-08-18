const nodemailer = require('nodemailer');

const mailConfig = require('../config/mail.json');

const  transport = nodemailer.createTransport({
  host,
  port,
  auth: { user,pass },
});

module.exports = transport;