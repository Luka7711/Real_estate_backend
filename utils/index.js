/* CSV READER */
const fs = require("fs");
const csvParser = require("csv-parser");
const dir_cities = "./public/uscities.csv";
const City = require("../models/city");

function createCitiesCollection() {
    let results = [];
    fs.createReadStream(dir_cities)
    .pipe(csvParser())
    .on("data", async(data) => {
        
        
        let zipcodes = await data['zips'].split(" ");

        let dataForModel = {
            city: data.city, 
            state_id: data.state_id, 
            state_name: data.state_name,
            county_name: data.county_name,
            zipcodes: []
        };

        let new_city = new City(dataForModel);

        for await (let zip of zipcodes) {
            new_city['zipcodes'].push(zip)
        }
        
        await new_city.save();
    })
    .on("end", () => {
        console.log(results[0])
        console.log("SUCCESS");
    });
}

module.exports = createCitiesCollection;

