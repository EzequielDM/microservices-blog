const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(
  express.json({
    extended: false,
  })
);
app.use(cors());

const posts = [];

app.get("/posts", (_req, res) => {
  return res.json(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const title = req.body.title;

  if (!title || title.length < 4)
    return res.status(400).json({ title: "Title must be at least 4 characters long" });

  posts.unshift({ id, title });

  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  res.status(201).json(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  return res.send({});
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
