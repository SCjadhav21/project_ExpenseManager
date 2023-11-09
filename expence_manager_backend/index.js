require("dotenv").config();
const mysql = require("mysql2/promise");
const express = require("express");
const cors = require("cors");

const app = express();
const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
const { UserRoutes } = require("./routes/user.routes");
app.use(express.json());
app.use(cors());

// Middleware to make the MySQL connection pool available to all routes
app.use((req, res, next) => {
  req.db = pool;
  next();
});

// Example route to fetch data from MySQL
app.use("/user", UserRoutes, (req, res) => {
  res.status(404).send("Routes not found");
});

app.listen(process.env.portForApp, () => {
  console.log(
    `Server is running on http://localhost:${process.env.portForApp}`
  );
});
