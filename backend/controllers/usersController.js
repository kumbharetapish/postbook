const users = require("../Models/usersModel");

exports.checkId = (req, res, next, val) => {
  if (req.params.id * 1 > usersData.length) {
    return res.status(404).json({
      status: "failed",
      message: "id is invalid.",
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.email) {
    return res.status(404).json({
      status: "failed",
      message: "name and email mush have .",
    });
  }
  next();
};

exports.getUsers = async (req, res) => {
  try {
    const queryObj = {...req.query}
    const allUsers = await users.find(queryObj);
    
    res.status(200).json({
      status: "Success.",
      results: allUsers.length,
      data: {
        users: allUsers,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: {
        err,
      },
    });
  }
};

exports.getUser = async (req, res) => {
  try {    
    const getSelUser = await users.findById(req.params.id);   
    res.status(200).json({
      status: "Success",
      data: {
        user: getSelUser,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed.",
      message: error,
    });
  }
};




exports.postUser = async (req, res) => {
  try {
    const newUser = await users.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch {
    res.status(404).json({
      status: "Failed",
      message: "error",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const selUserUpdate = await users.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      status: "Success",
      data: {
        user: selUserUpdate,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed.",
      message: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const getSelUser = await users.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Success",
      data: {
        user: getSelUser,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "failed.",
      message: error,
    });
  }
};
