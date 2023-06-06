const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs")

let items = ["Solve Leetcode Daily Challenge", "Upsolve previous contest", "Complete 1 module from dev course"];

app.get("/", function(req, res) {
    
    let today = new Date();
    let currentDay = today.getDay();
    
    let options = {
        weekday: "long", 
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day, newListItems: items});

});

app.post("/", function(req, res) {
    items.push(req.body.newItem)
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server is running at port 3000.");
})