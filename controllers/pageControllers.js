const Post = require("../models/Post");

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getAddPost = (req, res) => {
  res.render("add_post");
};

exports.getEditPostPage = async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.render("edit", { post });
};
