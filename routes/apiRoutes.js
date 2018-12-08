var db = require("../models");

module.exports = function(app) {
    app.post("/api/burgers", function(req,res) {
        db.burgers.create({name:req.body.name}).then(function(post) {
            res.json(post);
        })
    });
    app.put("/api/burgers/:id", (req,res) =>{
        db.burgers.update(req.body,
            {
            where: {
                id: req.params.id
            }
        }).then((results) => res.json(results));
    })
};