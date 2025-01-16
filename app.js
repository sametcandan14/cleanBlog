const express = require("express");

const app = express();

//TEMPLATE ENGINE

app.set("view engine", "ejs");

//MIDDLEWARES

app.use(express.static("public"));

//ROUTES

app.get("/", (req, res) => {
  res.render("index");
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

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu port ${port} de çalışıyor.`);
});
