var express = require("express");
var app = express();

app.get("/",function(req, res){
    res.render("home.ejs");
    res.send("welcome to the home page");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
})

app.get("/posts", function(req, res) {
    var posts = [
        {title: "post1", author: "Suzi"},
        {title: "post2", author: "Suzii"},
        {title: "post3", author: "Suziiii"}
    ];
    res.render("posts.ejs", {posts: posts});
})
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});