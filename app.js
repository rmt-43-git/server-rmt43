const express = require("express");
const Controller = require("./controllers/UserController");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  try {
    // ...
  } catch (error) {
    // ...
  }
});

app.post("/login", Controller.login);

app.get("/movies", Controller.getMovies);
app.post("/movies", (req, res) => {
  // ..
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
