// This is where we will set up our db connection
const mongoose = require("mongoose");
const url = process.env.MONDGODB_URL;

mongoose.set('strictQuery', false);

mongoose.connect(url, 
    { 
      useNewUrlParser:true,
      useUnifiedTopology: true 
    }
  )
  .then(() => console.log("mongoose is connected"))
  .catch(err => console.log(err, "something went wrong"));
