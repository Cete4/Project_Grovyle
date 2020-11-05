// Requiring path to so we can use relative routes to our HTML files
let path = require("path");
let router = require("express").Router();
let db = require("../models");

router.get("/", function(req, res) {
    // By default send the user to the calender page
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/api/activities", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    db.activities.findAll().then(function(result) {
        return res.json(result);
    });
});

router.get("/api/activities/:threshold", function(req, res) {

    db.activities.findOne({
        where: {
            threshold: req.params.threshold
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