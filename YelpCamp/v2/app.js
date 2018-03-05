var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// v2: add mongoose to the express
var mongoose = require("mongoose");
// connect mongoose
mongoose.connect("mongodb://localhost/cat_camp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//schema setup
var catSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Cat = mongoose.model("Cat", catSchema);

// create some objects
// Cat.create(
//     {
//         name: "E & D",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSxFjAjpqk4WScj5NPJ67du9QoHmHhStIgxR9P7VxqOnh7bKqHQ",
//         description: "two cute little cats. 1 week."
        
//     }, function(error, cat){
//         if(error){
//             console.log(error);
//         }else{
//             console.log("NEWLY created ");
//             console.log(cat);
//         }
// });

// Cat.create(
//     {
//         name: "tuna",
//         image: "http://images4.fanpop.com/image/photos/16000000/Cute-Kitten-Wallpaper-kittens-16094681-500-313.jpg",
//         description: "tuna maniac. 1 year old"
        
//     }, function(error, cat){
//         if(error){
//             console.log(error);
//         }else{
//             console.log("NEWLY created ");
//             console.log(cat);
//         }
// });

// Cat.create(
//     {
//         name: "fiona",
//         image: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg",
//         description: "a lovely fiona."
//     }, function(error, cat){
//         if(error){
//             console.log(error);
//         }else{
//             console.log("NEWLY created ");
//             console.log(cat);
//         }
// });
// Cat.create(
//     {
//         name: "athee tieo",
//         image: "https://www.communitycatspodcast.com/wp-content/uploads/2014/11/BarnCat.jpg",
//         description: "may become fatter in one month."
//     }, function(error, cat){
//         if(error){
//             console.log(error);
//         }else{
//             console.log("NEWLY created ");
//             console.log(cat);
//         }
// });


app.get("/", function(req, res){
    //res.send("this will be the landing page soon");
    res.render("landing");
    
});
app.get("/cats", function(req, res){
    // get all cats from db
    Cat.find({}, function(err, allCats){
        if(err){
            console.log(err);
        }else{
            res.render("index", {cats: allCats});
        }
    });
});
app.post("/cats", function(req, res){
    console.log("hit the post route");
    var cat_name = req.body.name;
    var cat_image = req.body.image;
    var cat_description = req.body.description;
    var newCat = {name: cat_name, image: cat_image, description: cat_description};

    //create a new cat and save to db
    Cat.create(newCat, function(err, newlyCat){
        if(err){
            console.log(err);
        }else{
            res.redirect("/cats");
        }
    });
    
});

app.get("/cats/new", function(req, res) {
    // create a new campground
    // form -> pass data to post campgrounds
    res.render("new.ejs");
});

// SHOW: shows more info about one cat
app.get("/cats/:id", function(req, res){
    // find the cat with provided id in the mongodb
    Cat.findById(req.params.id, function(err, foundCat){
        if(err){
            console.log(err);
        }else{
            res.render("show", {cat: foundCat});
        }
    });
    // render show template with the cat
    // res.send("THIS will be the show page one day!")

});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
})