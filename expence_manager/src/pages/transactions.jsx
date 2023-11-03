import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import ManageExpence from "./manageExpence";
import "../css/transactions.css";
import ManageIncome from "./manageincome";
const Transactions = () => {
  let [manageExpenceOpen, setManageExpenceOpen] = useState(false);
  let [manageIncomeOpen, setManageIncomeOpen] = useState(false);
  return (
    <>
      {manageIncomeOpen && (
        <ManageIncome
          manageIncome={manageIncomeOpen}
          setManageIncome={setManageIncomeOpen}
        />
      )}
      {manageExpenceOpen && (
        <ManageExpence
          manageExpence={manageExpenceOpen}
          setManageExpence={setManageExpenceOpen}
        />
      )}
      {!manageExpenceOpen && !manageIncomeOpen && (
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
                setManageExpenceOpen(!manageExpenceOpen);
              }}
              className=" button-css button-expence"
              role="button"
            >
              <span class="text">Add Expence</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Transactions;
