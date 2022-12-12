const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
require("./db/db");

const PORT = process.env.PORT;


const userController = require("./controllers/user");
const cityController = require("./controllers/city");

app.use(cors({
  origin: process.env.CLIENT_URL
}));

app.use("/auth", userController);
app.use("/cities", cityController);
app.get("/", (res) => {
  res.send("SERVER is running")
});

app.listen(PORT || 9000, () => {
  console.log("Listening on port")
});
