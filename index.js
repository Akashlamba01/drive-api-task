const express = require("express");
const fileUpload = require("express-fileupload");
const { errors } = require("celebrate");
const path = require("path");

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, "public")));

app.get("/status", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api", require("./src/routes/drivesRoute"));

app.use(errors());

app.listen(3001, () => {
  console.log("server is run: 3001");
});
