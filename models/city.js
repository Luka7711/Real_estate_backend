const { Schema, model } = require("mongoose")

const citySchema = new Schema({
  city: String,
  state_id: String,
  state_name: String,
  county: String,
  zipcodes: [{ body: String }]
});

const City = model("City", citySchema);

module.exports = City;
