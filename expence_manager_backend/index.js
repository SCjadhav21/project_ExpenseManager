const mysql = require("mysql");
require("dotenv").config();
// connection
const connection = mysql.createConnection(process.env.mysqlUrl);

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

connection.end((err) => {
  if (err) {
    console.error("Error closing MySQL connection:", err);
    return;
  }
  console.log("MySQL connection closed");
});
