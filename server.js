const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
require("./db/db");

let PORT = process.env.PORT;

if (PORT == null || PORT == "") PORT = 9000;

const userController = require("./controllers/user");
const cityController = require("./controllers/city");

app.use(cors({
  origin: process.env.CLIENT_URL
}));

app.use("/auth", userController);
app.use("/cities", cityController);


app.listen(PORT = () => {
  console.log("Listening on port 9000");
});
