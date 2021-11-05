const express = require("express");
const axios = require("axios");

const app = express();
app.use(
  express.json({
    extended: false,
  })
);

const targets = [4000, 4001, 4002];

app.post("/events", (req, res) => {
  const event = req.body;

  targets.forEach((port) => {
    axios.post(`http://localhost:${port}/events`, event).catch((e) => console.error(e.message));
  });

  res.send({ status: "OK" });
});

app.listen(4005, (req, res) => {
  console.log("Listening on port 4005");
});
