const express = require("express");

const app = express();

const mongoose = require("mongoose");

const Post = require("./models/Post");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const moment = require("moment");

//connect db

mongoose.connect("mongodb://localhost/cleanblog-test-db");

//TEMPLATE ENGINE

app.set("view engine", "ejs");

//MIDDLEWARES

app.use(express.static("public"));

//ROUTES

app.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.render("index", { posts, moment });
});

app.get("/post/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.render("post", { post, moment });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add_post");
});

app.get("/post", (req, res) => {
  res.render("post");
});

/* app.get("/", (req, res) => {
  const blog = { id: 1, title: "Blog title", description: "Blog description" };
  res.send(blog);
}); */

app.post("/posts", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu port ${port} de çalışıyor.`);
});
