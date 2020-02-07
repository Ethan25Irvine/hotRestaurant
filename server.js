var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 3050;
// function runApp (){
    // Sets up the Express app to handle data parsing
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
// }
const reservation = [ 
    {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];
const waitlist = [];

app.get("/api/tables", function(req, res) {
    return res.json(reservation);
  });
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  

  app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newReservation
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    reservation.push(newReservation);
  
    res.json(newReservation);
  });