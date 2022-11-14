const express = require("express");
const app = express();
require("dotenv").config();
require("./db/db");

const PORT = process.env.PORT;
const userController = require("./controllers/user");
const cityController = require("./controllers/city");
const createCitiesCollection = require('./utils/index');

app.use((res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  next();
});

app.use("/auth", userController);
app.use("/", cityController);


app.listen(PORT || 9000, () => {
  console.log("Listening on port 9000");
});
