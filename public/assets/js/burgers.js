// wait until page has loaded to run this
$(function() {
   // *********************************
   // clicking the create burger button
   $(".create-burger").on("click", function(event) {
      event.preventDefault();

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

   //end of the 'wait to load' opening function
});
