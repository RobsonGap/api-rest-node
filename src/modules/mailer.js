const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const mailConfig = require('../config/mail.json');

const  transport = nodemailer.createTransport({
  host,
  port,
  auth: { user,pass },
});

transport.use('compile',hbs({
 viewEngine: 'handlebars',
 viewPath: path.resolve('./src/resources/email/'),
 extName: '.html',
}));

module.exports = transport;