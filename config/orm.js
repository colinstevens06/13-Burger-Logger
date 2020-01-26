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
      let queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
         if (err) throw err;
         callback(result);
      });
   },
   create: function(table, cols, vals, callback) {
      let queryString = "INSERT INTO " + table;

      queryString += " (";
      queryString += cols.toString();
      queryString += ") VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";

      console.log(queryString);

      connection.query(queryString, vals, function(err, result) {
         if (err) throw err;
         callback(result);
      });
   }
};

module.exports = orm;
