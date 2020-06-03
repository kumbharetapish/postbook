const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { unique: true, type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  number: { type: String, required: true },
  dob: { type: String },
  gender: { type: String },
  favorite: {
    type: [String],
    default: null,
  },
});

const users = mongoose.model("Users", userSchema);

module.exports = users;
