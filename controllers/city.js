const express = require("express");
const { findOne } = require("../models/city");
const router = express.Router();
const City = require('../models/city');

//  

/** If empty param, query city by non empty param*/

router.get("/location-search", async(req, res) => {

    try {
        
        const { city, state, neighborhood } = req.query;   
        let result = null;

        if (city) {
            let foundLocation = await City.findOne({ city: city })
            if (foundLocation) result = foundLocation;
        }

        else if (state) {
            let foundLocation = await City.findOne({ state_id: state })
            if (foundLocation) result = foundLocation;
        } 

        else if (neighborhood) {
            let foundLocation = await City.findOne({ county_name: neighborhood })
            if (foundLocation) result = foundLocation;
        };

        if (result) {

            res.status(200)
            .json({
                city: result['city'],
                state_id: result['state_id'],
                lat: result['coords']['lat'],
                lng: result['coords']['lng']
            })

        } else {

            res.status(200) 
            .json(null)

        }

    } catch (error) {

        console.log(error)

    }
});


router.get("/:zipcode", async(req, res) => {

    try {
        const city = await City.findOne({ zipcodes: req.params.zipcode });
        
        if (city) {
            res.status(200)
            .json({
                city: city['city'],
                state_id: city['state_id'],
                lat: city['coords']['lat'],
                lng: city['coords']['lng']
            })

        } else {
            res.status(200).
            json(null)
        }

    } catch(error) {
        console.log(error)   
    } 
});

router.get("/all-cities/find", async(req, res) => {
    try {
        
        const data = await City.find({});

        let cities = [];
        let states = [];
        let neighborhoods = [];

        data.forEach(item => {
            cities.push(item['city']);
            states.push(item['state_id']);
            neighborhoods.push(item['county_name'])
        });
        
        res.status(200)
        .json({
            cities: cities,
            states: states,
            neighborhoods: neighborhoods
        });

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
