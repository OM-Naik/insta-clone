const express = require('express');
const authController = require('../contollers/auth.controller');
const identifyUser = require('../middlewares/auth.middleware');




const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post("/register", authController.registerControl);


/**
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */
authRouter.post("/login", authController.loginControl);


/**
 * @route GET /api/auth/get-me
 * @desc Get the currently logged-in user's information
 * @access Private
 */
authRouter.get("/get-me", identifyUser, authController.getMeControl);

module.exports = authRouter;