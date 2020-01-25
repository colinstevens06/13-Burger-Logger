const orm = require("../config/orm");

const burger = {
   all: function(callback) {
      orm.all("burgers", function(response) {
         callback(response);
      });
   },
   create: function(cols, vals, callback) {
      orm.create("burgers", cols, vals, function(response) {
         callback(response);
      });
   }
};

module.exports = burger;
