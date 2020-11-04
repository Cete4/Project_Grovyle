// Requiring path to so we can use relative routes to our HTML files
let path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // By default send the user to the calender page
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

};
