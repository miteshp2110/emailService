const express = require('express');

const otp = require('../Controller/Otp')
const notification = require("../Controller/Notification")
const otpEmail = require("../Controller/EmailVerification")
const routes = express.Router();

routes.route('/notification').post(notification)
routes.route("/otp").post(otp)
routes.route("/emailVerification").post(otpEmail)

module.exports = routes;