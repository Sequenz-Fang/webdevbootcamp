var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment");
});

app.get("/speak/pig", function(req, res){
    res.send("Oink!");
});

app.get("/speak/cow", function(req, res){
    res.send("Moo!");
});

app.get("/speak/dog", function(req, res){
    res.send("Woof Woof!");
});

app.get("/repeat/:string/:number", function(req, res) {
    var string = req.params.string;
    var number = Number(req.params.number);
    var resultString = "";
    for(var i = 0; i < number; i++){
        resultString = resultString + string + " ";
    }
    res.send(resultString);
});

app.get("*", function(req, res) {
    res.send("Sorry page not found.");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started!")
});