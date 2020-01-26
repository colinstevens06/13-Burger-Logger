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
   },
   update: function(objColVals, condition, callback) {
      orm.update("burgers", objColVals, condition, function(response) {
         callback(response);
      });
   }
};

module.exports = burger;
