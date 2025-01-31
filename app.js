const express = require("express");

const app = express();

const mongoose = require("mongoose");

const Post = require("./models/Post");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const methodOverride = require("method-override");

const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("./controllers/postControllers");
const {
  getAboutPage,
  getAddPost,
  getEditPostPage,
} = require("./controllers/pageControllers");

//connect db

mongoose
  .connect(
    "mongodb+srv://samet:628nxsNb1tCVI8XN@cluster0.svezz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

//TEMPLATE ENGINE

app.set("view engine", "ejs");

//MIDDLEWARES

app.use(express.static("public"));

app.use(methodOverride("_method"));

//ROUTES

//Pages
app.get("/", getAllPosts);

app.get("/post/:id", getPost);

app.get("/about", getAboutPage);

app.get("/add", getAddPost);

//Controllers

app.post("/posts", createPost);

app.get("/posts/edit/:id", getEditPostPage);

app.put("/posts/:id", updatePost);

app.delete("/posts/:id", deletePost);

/* app.get("/", (req, res) => {
  const blog = { id: 1, title: "Blog title", description: "Blog description" };
  res.send(blog);
}); */

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Sunucu port ${port} de çalışıyor.`);
});
