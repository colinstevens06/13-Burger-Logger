// DEPENDENCIES
const express = require("express");
const expressHandlebars = require("express-handlebars");

// Connect to Heroku
const PORT = process.env.PORT || 3000;

// fire up express
const app = express();

// serving up visual content for the app from the "public" folder
app.use(express.static("public"));

// parse application for API/JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect handlebars
app.engine("handlebrs", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes into the server
const routes = require("./controllers/burgerController");

app.use(routes);

// use the server and let me know that it's working
app.listen(PORT, function() {
   console.log("Server listening on: http://locahost:" + PORT);
});
