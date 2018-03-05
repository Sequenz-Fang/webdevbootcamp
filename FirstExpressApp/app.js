var express = require("express");
var app = express();



app.get("/", function(req, res){
   res.send("Hi there!!"); 
});

app.get("/bye", function(req, res){
    res.send("goodbye")
})

app.get("/dog", function(req, res) {
    res.send("MEOW")
});

// the ":" stands for a pattern
app.get("/r/:subRedditName", function(req, res) {
    var subreddit = req.params.subRedditName;
    res.send("welcome to" + subreddit.toUpperCase() + " subreddit");
});

// Show message when not found the route
// need to write at last 
app.get("*", function(req, res){
    res.send("YOU ARE A 404 STAR");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started!")
});
