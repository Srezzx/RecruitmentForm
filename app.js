var express = require("express");
var app = express();
app.set("view engine", "ejs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + "/public"));
var mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);


// mongoose.connect("", {
//     useNewUrlParser: true,
//     useCreateIndex: true
// }).then(() => {
//     console.log('Connected to DB!');
// }).catch(err => {
//     console.log('Error', err.message);
// });


var methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.get("/",function(req,res){
    res.render("index");
});

app.post("/test",function(req,res){
    res.send(req.body);
});

app.listen(process.env.PORT || 3000, process.env.ID, function (req, res) {
    console.log("Server has started for recruitment form  at PORT 3000");
});
