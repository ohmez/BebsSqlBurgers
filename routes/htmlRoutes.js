var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req,res) {
        db.burgers.findAll({}).then((results) =>{
            var burgers = {
                burgers: results
            };
            res.render("index",burgers);
        })
    });
};