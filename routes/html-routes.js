// Requiring path to so we can use relative routes to our HTML files
let path = require("path");
<<<<<<< HEAD
let router = require("express").Router();


  router.get("/", function(req, res) {
=======

module.exports = function(app) {

  app.get("/", function(req, res) {
>>>>>>> 28fd1cd49ef7e900127f23012c2787d9f988ce88
    // By default send the user to the calender page
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

<<<<<<< HEAD
module.exports = router;
=======
};
>>>>>>> 28fd1cd49ef7e900127f23012c2787d9f988ce88
