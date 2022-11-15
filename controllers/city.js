const express = require("express");
const router = express.Router();
const City = require('../models/city');

router.get("/:zipcode", async(req, res) => {

    try {
        const city = await City.findOne({ zipcodes: req.params.zipcode });
        
        if (city) {
            res.status(200)
            .json({
                city: city['city'],
                state_id: city['state_id']
            })

        } else {
            res.status(200).
            json(null)
        }

    } catch(error) {
        console.log(error)   
    } 
})

module.exports = router;
