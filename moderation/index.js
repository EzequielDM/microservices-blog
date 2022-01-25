const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json({ extend: false }));

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    try {
      await axios.post("http://localhost:4005/events", {
        type: "CommentModerated",
        data: {
          id: data.id,
          postId: data.postId,
          status: status,
          content: data.content,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }

  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on port 4003");
});
