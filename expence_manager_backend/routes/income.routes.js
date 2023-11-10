/*amount: "",
    receivedBy: "",
    paymentSource: "",
    date: "",
    description: "",*/
const express = require("express");
const { Auth } = require("../middelware/authentication");
require("dotenv").config();

const IncomeRoutes = express.Router();

IncomeRoutes.get("/", async (req, res) => {
  try {
    const [rows] = await req.db.execute("SELECT * FROM income");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

IncomeRoutes.post("/addincome", Auth, async (req, res) => {
  const { amount, receivedBy, date, description, paymentSource, userId } =
    req.body;

  try {
    const insertQuery =
      "INSERT INTO income ( amount, receivedBy, date, description,paymentSource, userId ) VALUES (?, ?, ?, ?,?)";
    await req.db.execute(insertQuery, [
      amount,
      receivedBy,
      date,
      description,
      paymentSource,
      userId,
    ]);
    res.status(201).send("Income Added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

module.exports = { IncomeRoutes };
