const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3050;
// function runApp (){
    // Sets up the Express app to handle data parsing
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
// }
const reservations = [ 
 
];
const waitlist = [];

app.get("/api/tables", function(req, res) {
    return res.json(reservations);
  });
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

app.post("/api/reservations", function(req, res) {
  const newReservation = req.body;
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  console.log(newReservation);
  reservations.push(newReservation);
  res.json(newReservation);
});