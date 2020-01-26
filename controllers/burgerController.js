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

router.get("/api/burgers", function(request, response) {
   burger.all(function(data) {
      let burgersObject = {
         burgers: data
      };

      response.json(burgersObject);
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

router.put("/api/burgers/:id", function(request, response) {
   let condition = "id = " + request.params.id;

   console.log("condition", condition);

   burger.update(
      {
         eaten: request.body.eaten
      },
      condition,
      function(result) {
         if (result.changedRows == 0) {
            return response.status(404).end();
         } else {
            response.status(200).end();
         }
      }
   );
});

// router.post("/api/burgers", function(request, response) {
//    burger.create();
// });

module.exports = router;
