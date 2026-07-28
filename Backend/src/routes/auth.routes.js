const express = require('express');
const authController = require('../contollers/auth.controller');

const authRouter = express.Router();


authRouter.post("/register", authController.registerControl);

authRouter.post("/login", authController.loginControl);


module.exports = authRouter;