const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`running on port 3000`);
});
