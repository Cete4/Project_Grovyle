let express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Requiring our models for syncing
var db = require("./models");

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
let routes = require("./controllers/controller.js");

app.use(routes);

// Routes
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});