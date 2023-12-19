const express = require("express");
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
