const nodemailer = require('nodemailer');
const emailConfig = require('../config/emailConfig.js');

const transporter = nodemailer.createTransport(emailConfig["development"]);

module.exports = transporter;
