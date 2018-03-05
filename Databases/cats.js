var mongoose = require("mongoose");
// connect the data base
mongoose.connect("mongodb://localhost/cat_app")

var catSchema= new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// add a new cat to the DB
// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament:"grouchy"
// })
// george.save(function(error, cat){
//     if(error){
//         console.log("SOMETHINGS WRONG");
//     }else{
//         console.log("WE HUST SAVED A CAT: ");
//         console.log(cat)
//     }
// });

// var norris = new Cat({
//     name: "Mrs Norris",
//     age: 7,
//     temperament: "Evil"
// });
// norris.save(function(err, cat){
//     if(err){
//         console.log("something's wrong")
//     }else{
//         console.log("WE SAVED ANTHOER CAT: ")
//         console.log(cat)
//     }
// })

// another way to create a cat
Cat.create({
    name: "Snow",
    age: 15,
    temperament: "bland"
}, function(err, cat){
    if(err){
        console.log("Something went wrong when adding Snow");
        console.log(err);
    }else{
        console.log(cat);
    }
})
// retrieve all cats from the database and console.log each one
// the function will run after the find has done
Cat.find({}, function(error, cats){
    if(error){
        console.log("oh no error!");
        console.log(error);
    }else{
        console.log("ALL THE CATS ... ")
        console.log(cats);
    }
})


