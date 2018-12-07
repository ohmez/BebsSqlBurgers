

var db = require("../models");

module.exports = function(app) {
    app.get("/burgers", function(req,res) {
        db.Burgers.findAll({}).then(function(results) {
            console.log(results);
            res.json(results);
            res.render("index",{layout:"main"});
        })
    });
    app.post("/api/burgers", function(req,res) {
        db.Burgers.create(req.body.name).then(function(post) {
            res.json(post);
        })
    })
};