const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/studentDB");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.use("/", studentRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});