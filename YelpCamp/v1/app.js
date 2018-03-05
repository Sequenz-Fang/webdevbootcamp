var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


var campgrounds = [
        {name:"salmon creek", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSxFjAjpqk4WScj5NPJ67du9QoHmHhStIgxR9P7VxqOnh7bKqHQ"},
        {name:"tuna rock", image:"http://images4.fanpop.com/image/photos/16000000/Cute-Kitten-Wallpaper-kittens-16094681-500-313.jpg"},
        {name:"forest foi", image:"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"},
        {name:"athee tieo", image:"https://www.communitycatspodcast.com/wp-content/uploads/2014/11/BarnCat.jpg"},
    ];


app.get("/", function(req, res){
    //res.send("this will be the landing page soon");
    res.render("landing");
    
})
app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds : campgrounds});
})
app.post("/campgrounds", function(req, res){
    // get data from form
    // add to campgrounds array
    // redirect to campgrounds page
    // res.send("you hit the post route")
    var camp_name = req.body.camp_name;
    var camp_image = req.body.camp_image;
    var newCampground = {name: camp_name, image: camp_image};
    // add the camp name and camp image to the array of campground objects
    campgrounds.push(newCampground);
    
    res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(req, res) {
    // create a new campground
    // form -> pass data to post campgrounds
    res.render("new.ejs");
})
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
})