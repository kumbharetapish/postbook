const express = require("express");
const {
  getUser,
  getUsers,
  postUser,
  updateUser,
  deleteUser,
  checkId,
  checkBody,
} = require("../controllers/usersController");
const { signup } = require("../controllers/authentication");
const router = express.Router();

// router.param("id", checkId);
router.route("/signup").post(signup);
router.route("/").get(getUsers).post(postUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
module.exports = router;
