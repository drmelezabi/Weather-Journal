// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

app.get("/all", cors(), (req, res) => res.status(200).send(projectData));

app.post("/add", cors(), (req, res) => {
  projectData = req.body;
  console.log(projectData);
  res.status(200).send(projectData);
});

//countries DB
const countries = require("./countries.js");
// check country is correct or not
app.get("/countries/:id", (req, res) => {
  //set parametar in variable
  let co = req.params.id.toLowerCase();
  //ser default code value as "none"
  let reCode = "none";
  // check id there are a country like request in DB ? change "code" value from "none" to "country code"
  for (i = 1; i < countries.length; i++) {
    countries[i]["country"] == co ? (reCode = countries[i]["code"]) : "";
  }
  //create an object called "send" in order to send it to client side
  let send = { code: reCode };
  //process "send value"
  console.log(send);
  res.status(200).send(send);
});

//
const port = 4000;

// Setup Server
app.listen(4000, () => {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
});
