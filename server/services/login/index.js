const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

const testUser = {
  username: "raiden@gmail.com",
  password: bcrypt.hashSync("@#Raidenfernando", 10),
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== testUser.username) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  if (!bcrypt.compareSync(password, testUser.password)) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ username: testUser.username });
  res.json({ token }); //post response
});
