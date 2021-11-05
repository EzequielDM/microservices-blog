const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  express.json({
    extended: false,
  })
);
app.use(cors());

let posts = {};

app.get("/posts", (req, res) => {
  return res.json(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId } = data;

    const post = posts[postId];
    post.comments.unshift({ id, content });
  }

  console.log(`posts`, posts);
  res.send({});
});

app.listen(4002, () => {
  console.log("Listening on port 4002");
});
