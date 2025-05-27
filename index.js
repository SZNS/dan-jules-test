const express = require("express");
const app = express();
const port = 3000;

app.get("/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res
      .status(400)
      .json({ error: "Parameters a and b must be numbers." });
  }
  res.json({ result: a + b });
});

app.get("/subtract", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res
      .status(400)
      .json({ error: "Parameters a and b must be numbers." });
  }
  res.json({ result: a - b });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`API service listening at http://localhost:${port}`);
  });
}

module.exports = app;
