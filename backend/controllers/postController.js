const posts = require("../Models/postModel");

exports.getPosts = async (req, res) => {
  console.log(req.requestTime);
  try {
    const allPost = await posts.find();
    res.status(200).json({
      status: "Success.",
      results: allPost.length,
      data: {
        posts: allPost,
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

exports.postPost = async (req, res) => {
  try {
    const newPost = await posts.create(req.body);
    console.log(newPost);

    res.status(201).json({
      status: "success",
      data: {
        post: newPost,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(404).json({
      status: "Failed",
      message: `error${error}`,
    });
  }
};

exports.getPost = async (req, res) => {
  try {
    const selPost = await posts.findById(req.params.id);

    res.status(200).json({
      status: "Success",
      data: {
        post: selPost,
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

exports.updatePost = async (req, res) => {
  try {
    const selPostUpdate = await posts.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      status: "Success",
      data: {
        post: selPostUpdate,
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

exports.deletePost = async (req, res) => {
  try {
    const getSelPost = await posts.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Success",
      data: {
        post: getSelPost,
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

exports.getFavoritePost = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    console.log(queryObj);

    const favPosts = await posts.find(queryObj);
    res.status(200).json({
      status: "Success.",
      results: favPosts.length,
      data: {
        users: favPosts,
      },
    });
  } catch (err) {
    console.log(err);

    res.status(404).json({
      status: "Failed",
      message: {
        err,
      },
    });
  }
};
