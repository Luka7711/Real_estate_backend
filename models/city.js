const { Schema, model } = require("mongoose")

const citySchema = new Schema({
  city: String,
  state_id: String,
  state_name: String,
  county_name: String,
  zipcodes: [String]
});

const City = model("City", citySchema);

module.exports = City;
