const express = require("express");
const path = require("path");
const app = express();

//      REED
app.use(express.static(path.join(__dirname, "investment-map")));

//  HOMEPAG
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "investment-map", "index.html"));
});

app.get("/longterm", (req, res) => {
  res.sendFile(path.join(__dirname, "investment-map", "longterm.html"));
});

app.get("/temp", (req, res) => {
  res.sendFile(path.join(__dirname, "investment-map", "temp.html"));
});

app.get("/api/longterm", (req, res) => {
  res.sendFile(
    path.join(__dirname, "investment-map", "opportunities-long-term.json")
  );
});

app.get("/api/temp", (req, res) => {
  res.sendFile(
    path.join(__dirname, "investment-map", "opportunities-temp.json")
  );
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
