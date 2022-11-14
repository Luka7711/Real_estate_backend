const express = require("express");
const app = express();
require("dotenv").config();
require("./db/db");

const PORT = process.env.PORT;
const domains = [
  "https://movies-in-park.herokuapp.com",
  "http://localhost:3000",
  "https://movie-dbs.herokuapp.com"
];

const userController = require("./controllers/user");
const cityController = require("./controllers/city");

app.use((res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  next();
});

app.get("/", (res) => res.send("GET REQUEST IS MADE"));

app.use("/auth", userController);
app.use("/chicago-cinema", cityController);

app.listen(PORT || 9000, () => {
  console.log("Listening on port 9000");
});
