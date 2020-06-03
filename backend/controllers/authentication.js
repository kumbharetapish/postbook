const users = require("../Models/usersModel");

exports.signup = async (req, res) => {
  try {
    const newUser = await users.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    console.log(error);  
    res.status(404).json({
      status: "Failed",
      message: [error, "error"],
    });
  }
};
