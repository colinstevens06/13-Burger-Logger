const express = require("express");

const router = express.Router();

// importing the model to use its database functions
const burger = require("../models/burger");

router.get("/", function(request, response) {
   burger.all(function(data) {
      let burgersObject = {
         burgers: data
      };
      console.log(burgersObject);
      response.render("index", burgersObject);
   });
});

router.post("/api/burgers", function(request, response) {
   burger.create(
      ["burgerName", "burgerToppings"],
      [request.body.burgerName, request.body.burgerToppings],
      function(result) {
         response.json({ id: result.insertId });
      }
   );
});

// router.post("/api/burgers", function(request, response) {
//    burger.create();
// });

module.exports = router;
