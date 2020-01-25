const express = require("express");

const router = express.Router();

// importing the model to use its database functions
const burger = require("../models/burger");

router.get("/", function(request, response) {
   response.render("index", "PLACEHOLDER");
});

router.post("/api/burgers", function(request, response) {});
