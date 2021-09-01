const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const unirest = require("unirest");
const cors = require("cors");
const session = require("express-session");

require("dotenv").config();
require("./db/db");

const PORT = process.env.PORT;

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

console.log(PORT);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://movies-in-park.herokuapp.com/",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const userController = require("./controllers/userController");
const movieController = require("./controllers/movieController");
app.use("/auth", userController);
app.use("/chicago-cinema", movieController);

app.listen(PORT || 9000, () => {
  console.log("listenining on port");
});
