const express = require("express");
const {
  getPosts,
  postPost,
  getPost,
  updatePost,
  deletePost,
  getFavoritePost,
} = require("../controllers/postController");

const router = express.Router();
router.route("/favorite").get(getFavoritePost);
router.route("/").get(getPosts).post(postPost);
router.route("/:id").get(getPost).patch(updatePost).delete(deletePost);

module.exports = router;
