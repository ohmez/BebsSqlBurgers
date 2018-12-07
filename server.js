var express = require('express');
var PORT = process.env.PORT || 3030;
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'));

var db = require("./models");
// require('./controllers/clientController.js')(app);
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);
var syncOptions = {force:false};
if(process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}
// app.use(routes);
db.sequelize.sync().then(function() {
    app.listen(PORT,(err) => {
        if(err) throw err;
        console.log('listening on LH+port:% ' + PORT);
    })
});