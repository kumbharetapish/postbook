const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  message: { type: String, required: true },
  usersData: {
    email: { type: String },
    username: { type: String },
  },

  like: { type: String, default: "0" },
  dislike: { type: String, required: true, default: "0" },
  updateTime: { type: String, default: "0" },
});

const posts = mongoose.model("Posts", postSchema);

module.exports = posts;
