/*amount: "",
    category: "",
    date: "",
    description: "",
    userId:"" */
const express = require("express");
const { Auth } = require("../middelware/authentication");
require("dotenv").config();

const ExpenseRoutes = express.Router();

ExpenseRoutes.get("/", async (req, res) => {
  try {
    const [rows] = await req.db.execute("SELECT * FROM expence");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
ExpenseRoutes.post("/addexpense", Auth, async (req, res) => {
  const { amount, category, date, description, userId } = req.body;
  console.log(req.body);
  try {
    const insertQuery =
      "INSERT INTO expence ( amount, category, date, description, userId ) VALUES (?, ?, ?, ?,?)";
    await req.db.execute(insertQuery, [
      amount,
      category,
      date,
      description,
      userId,
    ]);
    res.status(201).send("Expense Added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

module.exports = { ExpenseRoutes };
