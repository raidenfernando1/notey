const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const testUser = {
  username: "raiden@gmail.com",
  password: bcrypt.hashSync("@#Raidenfernando", 10),
};

const JWT_TOKEN_SECRET = "892173891";

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== testUser.username) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  if (!bcrypt.compareSync(password, testUser.password)) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ username: testUser.username }, JWT_TOKEN_SECRET, {
    expiresIn: "1h",
  });

  res.json({
    message: "Login successful",
    token: token,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
