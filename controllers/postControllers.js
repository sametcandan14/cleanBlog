const Post = require("../models/Post");

const moment = require("moment");

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.render("index", { posts, moment });
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.render("post", { post, moment });
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  post.title = req.body.title;
  post.subtitle = req.body.subtitle;
  post.author = req.body.author;
  post.message = req.body.message;

  post.save();

  res.redirect(`/post/${req.params.id}`);
};

exports.deletePost = async (req, res) => {
  const post = Post.findById(req.params.id);

  await post.deleteOne();

  res.redirect("/");
};
