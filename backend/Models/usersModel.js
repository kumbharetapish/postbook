const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { unique: true, type: String, required: [true, "email is Req."] },
  username: {
    type: String,
    required: [true, "username is Req."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is Req."],
    unique: true,
    minlength: 8,
  },
  re_password: {
    type: String,
    required: [true, "password is Req."],
    validate: (el) => {
      return this.password;
    },
    message: "password must be same",
  },
  number: {
    type: String,
    required: [true, "Cont. number is Req."],
    minlength: 10,
  },
  dob: { type: String },
  gender: { type: String },
  favorite: { id: [{ type: mongoose.Schema.Types.ObjectId, default: null }] },
  status: { default: false },
});

const users = mongoose.model("Users", userSchema);

module.exports = users;
