var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var routes = require("./controllers/burgers_controllers.js");
var app = express();
var methodOverride = require("method-override");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
app.use(express.static(process.cwd()+"/public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

  app.use("/", routes);

  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  











