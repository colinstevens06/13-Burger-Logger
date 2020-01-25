// Connection to mysql
const connection = require("../config/connection");

// in case I need to use question marks
function printQuestionMarks(num) {
   var arr = [];
 
   for (var i = 0; i < num; i++) {
     arr.push("?");
   }
 
   return arr.toString();
 }



const orm = {
   all: function(tableInput, callback) {
      let queryString = "SELECT * FROM "
   }
};
