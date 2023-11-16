import React, { useContext, useEffect, useState } from "react";
import ManageExpense from "./manageExpense";
import "../css/transactions.css";
import ManageIncome from "./manageincome";
import { IoMdHappy, IoMdBicycle } from "react-icons/io";
import { FaHome } from "react-icons/fa";

import { BsPersonWorkspace } from "react-icons/bs";
import { MdHealthAndSafety, MdShoppingCart } from "react-icons/md";
import axios from "axios";

import { GiLightningSpanner, GiForkKnifeSpoon } from "react-icons/gi";
import { AuthContext } from "../context/AuthContext";
import { SlOptions } from "react-icons/sl";
function getAmountByCategory(array, category) {
  const result = array.filter((item) => item.category === category);

  const totalAmount = result.reduce((sum, item) => sum + item.amount, 0);

  return totalAmount;
}
function getAmountPaymentSource(array, paymentSource) {
  const result = array.filter((item) => item.paymentSource === paymentSource);

  const totalAmount = result.reduce((sum, item) => sum + item.amount, 0);

  return totalAmount;
}
const Transactions = () => {
  const { userData } = useContext(AuthContext);
  const [income, setIncome] = useState([]);
  const [expence, setExpence] = useState([]);
  let [manageExpenseOpen, setManageExpenseOpen] = useState(false);
  let [manageIncomeOpen, setManageIncomeOpen] = useState(false);

  const getdataIncome = () => {
    axios(`http://localhost:4500/income/`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: userData.token,
      },
    })
      .then((res) => setIncome(res.data))
      .catch((err) => console.error(err));
  };
  const getdataExpence = () => {
    axios(`http://localhost:4500/expense/`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: userData.token,
      },
    })
      .then((res) => setExpence(res.data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getdataIncome();
    getdataExpence();
  }, []);
  console.log(income);
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
          {!income && !expence && (
            <img
              className="no-transaction-img"
              src="https://i.pinimg.com/originals/ce/a0/0d/cea00d5472fb477c9d2bf8724fac768d.jpg"
              alt="No Transactions Found"
            />
          )}
          <div>
            <div>
              <h1>Total Expense: ₹3000 </h1>
              <div>
                <div>
                  <GiForkKnifeSpoon
                    style={{
                      color: "#07DA06",
                    }}
                  />
                  <p>Food and Drinks </p>
                  <h3>{getAmountByCategory(expence, "food&drinks")}</h3>
                </div>
                <div>
                  <IoMdHappy
                    style={{
                      color: "#009EE1",
                    }}
                  />
                  <p>Leisure</p>
                  <h3>{getAmountByCategory(expence, "leisure")}</h3>
                </div>
                <div>
                  <IoMdBicycle
                    style={{
                      color: "orange",
                    }}
                  />
                  <p>Transportation</p>
                  <h3>{getAmountByCategory(expence, "transportation")}</h3>
                </div>
                <div>
                  <MdHealthAndSafety
                    style={{
                      colo: "red",
                    }}
                  />
                  <p>Health</p>
                  <h3>{getAmountByCategory(expence, "health")}</h3>
                </div>
                <div>
                  <MdShoppingCart
                    style={{
                      color: "#CA13C9",
                    }}
                  />
                  <p>Shooping</p>{" "}
                  <h3>{getAmountByCategory(expence, "shooping")}</h3>
                </div>
                <div>
                  <GiLightningSpanner
                    style={{
                      color: "#EE228F",
                    }}
                  />
                  <p>Utilities</p>{" "}
                  <h3>{getAmountByCategory(expence, "utilities")}</h3>
                </div>
              </div>
            </div>
            <div>
              <h1>Total Income: ₹3000 </h1>
              <div>
                <div>
                  <FaHome
                    style={{
                      colo: "red",
                    }}
                  />
                  <p>Home</p>
                  <h3>{getAmountPaymentSource(income, "home")}</h3>
                </div>
                <div>
                  <BsPersonWorkspace
                    style={{
                      color: "#CA13C9",
                    }}
                  />
                  <p>Job</p> <h3>{getAmountPaymentSource(income, "Job")}</h3>
                </div>
                <div>
                  <SlOptions
                    style={{
                      color: "#EE228F",
                    }}
                  />
                  <p>Others</p>{" "}
                  <h3>{getAmountPaymentSource(income, "other")}</h3>
                </div>
              </div>
            </div>
          </div>

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
