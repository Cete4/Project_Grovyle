let db = require("../models");

module.exports = function(app) {
    app.get("/api/Activities", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Activities.findAll({
            include: [db.Post]
        }).then(function(dbActivities) {
            res.json(dbActivities);
        });
    });

    app.get("/api/authors/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Activities.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function(dbActivities) {
            res.json(dbActivities);
        });
    });

    app.post("/api/Activities", function(req, res) {
        db.Author.create(req.body).then(function(dbAuthor) {
            res.json(dbAuthor);
        });
    });

    app.delete("/api/Activities/:id", function(req, res) {
        db.Author.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbAuthor) {
            res.json(dbAuthor);
        });
    });
};