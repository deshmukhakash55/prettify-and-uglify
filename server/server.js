const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (_, res) => {
  const templatePath = path.join(__dirname, "../build", "index.html");
  res.sendFile(templatePath);
});

const server = app.listen(8080, () => {
  console.log(`Server running on port ${server.address().port}`);
});
