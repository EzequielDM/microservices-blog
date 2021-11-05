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

let commentsByPostId = {};

app.get("/comments", (_req, res) => {
  res.json(commentsByPostId);
});

app.get("/posts/:id/comments", (req, res) => {
  res.json(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { content } = req.body;

  if (!content || content.length < 5)
    return res.status(400).json({ content: "Content must be at least 5 characters long" });

  const comments = commentsByPostId[req.params.id] || [];

  comments.unshift({ id, content });

  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id,
      content,
      postId: req.params.id,
    },
  });

  res.status(201).json(comments);
});

app.post("/events", (req, res) => {
  console.log("Event received", req.body.type);

  return res.send({});
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
