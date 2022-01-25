const express = require("express");
const axios = require("axios");

const app = express();
app.use(
  express.json({
    extended: false,
  })
);

const events = [];

const targets = [4000, 4001, 4002, 4003];

app.post("/events", (req, res) => {
  const event = req.body;

  console.log(`Received event ${event.type} with data: ${event.data}`);

  events.push(event);

  targets.forEach((port) => {
    axios
      .post(`http://localhost:${port}/events`, event)
      .catch((e) => console.error(`${port} - ${e.message}`))
      .then(console.log(`${event.type} -> ${port}`));
  });

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  console.log(`events`, events);
  res.send(events);
});

app.listen(4005, (req, res) => {
  console.log("Listening on port 4005");
});
