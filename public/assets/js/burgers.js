// wait until page has loaded to run this
$(function() {
   // *********************************
   // clicking the create burger button
   $(".create-burger").on("click", function(event) {
      event.preventDefault();
      console.log("create button clicked");

      const newBurger = {
         burgerName: $("#burgerName")
            .val()
            .trim(),
         burgerToppings: $("#burgerToppings")
            .val()
            .trim()
      };

      $.ajax("/api/burgers", {
         type: "POST",
         data: newBurger
      }).then(function() {
         console.log("create new burger");
         location.reload();
      });
   });

   // *********************************
   // clicking the 'eat now' button
   $(".eat-burger").on("click", function(event) {
      let id = $(this).data("id");
      let newBurger = $(this).data("burger");

      let newBurgerState = {
         eaten: newBurger
      };

      console.log("click heard. data here:");
      console.log(id);
      console.log(newBurger);
      console.log(newBurgerState);

      // send the PUT request
      $.ajax("/api/burgers/" + id, {
         type: "PUT",
         data: newBurgerState
      }).then(function() {
         console.log("changed eated to", newBurger);
         location.reload();
      });
   });

   //end of the 'wait to load' opening function
});
