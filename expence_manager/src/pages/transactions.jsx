import React, { useState } from "react";
import ManageExpense from "./manageExpense";
import "../css/transactions.css";
import ManageIncome from "./manageincome";
const Transactions = () => {
  let [manageExpenseOpen, setManageExpenseOpen] = useState(false);
  let [manageIncomeOpen, setManageIncomeOpen] = useState(false);
  return (
    <>
      {manageIncomeOpen && (
        <ManageIncome
          manageIncome={manageIncomeOpen}
          setManageIncome={setManageIncomeOpen}
        />
      )}
      {manageExpenseOpen && (
        <ManageExpense
          manageExpense={manageExpenseOpen}
          setManageExpense={setManageExpenseOpen}
        />
      )}
      {!manageExpenseOpen && !manageIncomeOpen && (
        <div style={{ margin: "30px" }}>
          <img
            className="no-transaction-img"
            src="https://i.pinimg.com/originals/ce/a0/0d/cea00d5472fb477c9d2bf8724fac768d.jpg"
            alt="No Transactions Found"
          />

          <div className="button-flex-div">
            <button
              onClick={() => {
                setManageIncomeOpen(!manageIncomeOpen);
              }}
              className=" button-css button-income"
              role="button"
            >
              <span class="text">Add Income</span>
            </button>
            <button
              onClick={() => {
                setManageExpenseOpen(!manageExpenseOpen);
              }}
              className=" button-css button-expense"
              role="button"
            >
              <span class="text">Add Expense</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Transactions;
