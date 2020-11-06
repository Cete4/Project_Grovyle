require('dotenv').config()
const key = process.env.API_KEY;
let db = require("../models");
console.log("peter", key);

// Requiring path to so we can use relative routes to our HTML files
let path = require("path");
let router = require("express").Router();

router.get("/api/key", function(req, res) {
    res.json(key)
});
router.get("/api/activities", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    db.activities.findAll().then(function(result) {
        return res.json(result);
    });
});

router.get("/api/activities/:TEMP", function(req, res) {

    db.activities.findOne({
        where: {
            TEMP: req.params.TEMP
        }
    }).then(function(dbActivities) {
        res.json(dbActivities);
    });
});

router.post("/api/activities", function(req, res) {
    db.activities.create(req.body).then(function(dbactivities) {
        res.json(dbactivities);
    });
});

module.exports = router;