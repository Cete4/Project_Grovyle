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

module.exports = router;