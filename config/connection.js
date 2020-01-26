const mysql = require("mysql");

// database connection info
const connection = mysql.createConnection({
   host: "localHost",
   port: 3306,
   user: "root",
   password: "mysql2020",
   database: "burger_db"
});

// make connection to the database

connection.connect(function(err) {
   if (err) {
      console.error("error connecting: " + err.stack);
      return;
   }
   console.log("\nconnected as ID " + connection.threatId + "\n");
});

module.exports = connection;
