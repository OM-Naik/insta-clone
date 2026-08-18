const express = require('express');
const postRouter = express.Router();
const postController = require("../contollers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middlewares/auth.middleware");


/** API 1
 * @route POST /api/posts
 * @description Create a new post with an image and caption. The image is uploaded as a file in the request body, and the caption is sent as a text field. The user must be authenticated to create a post.
*/
postRouter.post("/", upload.single("image"), identifyUser, postController.createPostController);


/** API 2
 * @route GET /api/posts
 * @description Get all posts. The user must be authenticated to view posts.
 */
postRouter.get("/", identifyUser, postController.getPostsController);

/** API 3
 * @route GET /api/posts/details/:postId
 * @description Get details of a specific post by its ID. The user must be authenticated to view post details.
 */
postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController);


/** API 4
 * @route POST /api/posts/like/:postId
 * @description Like a post with the given postId. The user must be authenticated to like a post.
 */
postRouter.post("/like/:postId", identifyUser, postController.likePostController);

/** API 5
 * @route GET /api/posts/feed
 * @description To get all posts created in database.
 * @access Private
 */
postRouter.get("/feed", identifyUser, postController.getFeedPostsController);


module.exports = postRouter;