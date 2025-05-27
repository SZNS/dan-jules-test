const express = require("express");
const app = express();
const port = 3000;

app.get("/add", (req, res) => {
  const num_a = parseFloat(req.query.num_a);
  const num_b = parseFloat(req.query.num_b);
  if (isNaN(num_a) || isNaN(num_b)) {
    return res
      .status(400)
      .json({ error: "Parameters num_a and num_b must be numbers." });
  }
  res.json({ result: num_a + num_b });
});

app.get("/subtract", (req, res) => {
  const num_a = parseFloat(req.query.num_a);
  const num_b = parseFloat(req.query.num_b);
  if (isNaN(num_a) || isNaN(num_b)) {
    return res
      .status(400)
      .json({ error: "Parameters num_a and num_b must be numbers." });
  }
  res.json({ result: num_a - num_b });
});

app.get("/multiply", (req, res) => {
  const num_a = parseFloat(req.query.num_a);
  const num_b = parseFloat(req.query.num_b);
  if (isNaN(num_a) || isNaN(num_b)) {
    return res
      .status(400)
      .json({ error: "Parameters num_a and num_b must be numbers." });
  }
  res.json({ result: num_a * num_b });
});

app.get("/divide", (req, res) => {
  const num_a = parseFloat(req.query.num_a);
  const num_b = parseFloat(req.query.num_b);
  if (isNaN(num_a) || isNaN(num_b)) {
    return res
      .status(400)
      .json({ error: "Parameters num_a and num_b must be numbers." });
  }
  if (num_b === 0) {
    return res.status(400).json({ error: "Cannot divide by zero." });
  }
  res.json({ result: num_a / num_b });
});

app.get("/negate", (req, res) => {
  if (req.query.num_a === undefined || isNaN(parseFloat(req.query.num_a))) {
    return res
      .status(400)
      .json({ error: "Parameter num_a must be a number." });
  }
  const num_a = parseFloat(req.query.num_a);

  res.json({ result: num_a * -1 });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`API service listening at http://localhost:${port}`);
  });
}

module.exports = app;
