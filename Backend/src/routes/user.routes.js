const express = require('express');
const userController = require("../contollers/user.controller");
const identifyUser = require("../middlewares/auth.middleware");

const userRouter = express.Router();


/**
@route POST /api/user/follow/:username
@description Follow a user
@access Private
**/
userRouter.post("/follow/:username", identifyUser, userController.followUserController);


/**
@route POST /api/user/unfollow/:username
@description Unfollow a user
@access Private
**/
userRouter.post("/unfollow/:username", identifyUser, userController.unfollowUserController);



/**
 * @route GET /api/user/follow/requests
 * @description Get all follow requests for the authenticated user
 * @access Private
 */
userRouter.get("/follow/requests", identifyUser, userController.getFollowRequestsController);


/**
 * @route POST /api/user/follow/requests/reject/:username
 * @description Reject a follow request from a specific user
 * @access Private
 */
userRouter.post("/follow/requests/reject/:username", identifyUser, userController.rejectFollowRequestController);



module.exports = userRouter;