import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

import { IoMdHappy, IoMdBicycle } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdHealthAndSafety, MdShoppingCart } from "react-icons/md";
import { GiLightningSpanner, GiForkKnifeSpoon } from "react-icons/gi";
import { SlOptions } from "react-icons/sl";

import ManageExpense from "./manageExpense";
import ManageIncome from "./manageincome";
import {
  getTotalExpence,
  getTotalIncome,
  getdataExpence,
  getdataIncome,
} from "../components/api";
import {
  getAmountByCategory,
  getAmountPaymentSource,
} from "../components/functions";

import "../css/transactions.css";

const Transactions = () => {
  const { userData } = useContext(AuthContext);

  const [income, setIncome] = useState([]);
  const [expence, setExpence] = useState([]);

  const [totalincome, setTotalIncome] = useState(0);
  const [totalexpence, setTotalExpence] = useState(0);

  const [refresh, setRefresh] = useState(false);
  const [manageExpenseOpen, setManageExpenseOpen] = useState(false);
  const [manageIncomeOpen, setManageIncomeOpen] = useState(false);

  useEffect(() => {
    getdataExpence(userData.token)
      .then((res) => setExpence(res.data))
      .catch((err) => console.error(err));

    getTotalExpence(userData.token)
      .then((res) => setTotalExpence(res.data))
      .catch((err) => console.error(err));

    getdataIncome(userData.token)
      .then((res) => setIncome(res.data))
      .catch((err) => console.error(err));

    getTotalIncome(userData.token)
      .then((res) => setTotalIncome(res.data))
      .catch((err) => console.error(err));
  }, [refresh]);

  return (
    <>
      {manageIncomeOpen && (
        <ManageIncome
          refresh={refresh}
          setRefresh={setRefresh}
          manageIncome={manageIncomeOpen}
          setManageIncome={setManageIncomeOpen}
        />
      )}
      {manageExpenseOpen && (
        <ManageExpense
          refresh={refresh}
          setRefresh={setRefresh}
          manageExpense={manageExpenseOpen}
          setManageExpense={setManageExpenseOpen}
        />
      )}
      {!manageExpenseOpen && !manageIncomeOpen && (
        <div style={{ margin: "30px" }}>
          {income.length == 0 && expence.length == 0 && (
            <img
              className="no-transaction-img"
              src="https://i.pinimg.com/originals/ce/a0/0d/cea00d5472fb477c9d2bf8724fac768d.jpg"
              alt="No Transactions Found"
            />
          )}
          {(income.length !== 0 || expence.length !== 0) && (
            <div className="main-flex">
              {expence.length == 0 && <h2>Expense Not Added!</h2>}
              {income.length == 0 && <h2>Income Not Added!</h2>}
              {expence.length !== 0 && (
                <div>
                  <h2>Total Expense: ₹{totalexpence} </h2>
                  <div>
                    <div>
                      <div className="flex-center-align">
                        <GiForkKnifeSpoon
                          style={{
                            color: "#07DA06",
                            fontSize: "30px",
                          }}
                        />
                        <p className="font-css">Food and Drinks </p>
                        <h3>₹ {getAmountByCategory(expence, "food&drinks")}</h3>
                      </div>{" "}
                      <input
                        style={{
                          boxShadow: "1px 1px 1px #00aa00",
                          border: "2px solid #83e584",
                        }}
                        className="range-input"
                        type="range"
                        value={getAmountByCategory(expence, "food&drinks")}
                        min="0"
                        max={totalexpence}
                      ></input>
                    </div>
                    <div>
                      <div className="flex-center-align">
                        {" "}
                        <IoMdHappy
                          style={{
                            color: "#009EE1",
                            fontSize: "30px",
                          }}
                        />
                        <p className="font-css">Leisure</p>
                        <h3>₹ {getAmountByCategory(expence, "leisure")}</h3>
                      </div>{" "}
                      <input
                        style={{
                          boxShadow: "1px 1px 1px #009EE1",
                          border: "2px solid #009EE1",
                        }}
                        className="range-input"
                        type="range"
                        value={getAmountByCategory(expence, "leisure")}
                        name="vol"
                        min="0"
                        max={totalexpence}
                      ></input>
                    </div>
                    <div>
                      <div className="flex-center-align">
                        {" "}
                        <IoMdBicycle
                          style={{
                            color: "orange",

                            fontSize: "30px",
                          }}
                        />
                        <p className="font-css">Transportation</p>
                        <h3>
                          ₹ {getAmountByCategory(expence, "transportation")}
                        </h3>
                      </div>{" "}
                      <input
                        type="range"
                        style={{
                          boxShadow: "1px 1px 1px orange",
                          border: "2px solid orange",
                        }}
                        className="range-input"
                        value={getAmountByCategory(expence, "transportation")}
                        name="vol"
                        min="0"
                        max={totalexpence}
                      ></input>
                    </div>
                    <div>
                      <div className="flex-center-align">
                        {" "}
                        <MdHealthAndSafety
                          style={{
                            color: "red",
                            fontSize: "30px",
                          }}
                        />
                        <p className="font-css">Health</p>
                        <h3>₹ {getAmountByCategory(expence, "health")}</h3>
                      </div>{" "}
                      <input
                        type="range"
                        style={{
                          boxShadow: "1px 1px 1px red",
                          border: "2px solid red",
                        }}
                        className="range-input"
                        value={getAmountByCategory(expence, "health")}
                        name="vol"
                        min="0"
                        max={totalexpence}
                      ></input>
                    </div>
                    <div>
                      <div className="flex-center-align">
                        {" "}
                        <MdShoppingCart
                          style={{
                            color: "#CA13C9",
                            fontSize: "30px",
                          }}
                        />
                        <p className="font-css">Shooping</p>
                        <h3>₹ {getAmountByCategory(expence, "shooping")}</h3>
                      </div>{" "}
                      <input
                        type="range"
                        style={{
                          boxShadow: "1px 1px 1px #CA13C9",
                          border: "2px solid #CA13C9",
                        }}
                        className="range-input"
                        value={getAmountByCategory(expence, "shooping")}
                        name="vol"
                        min="0"
                        max={totalexpence}
                      ></input>
                    </div>
                    <div>
                      <div className="flex-center-align">
                        {" "}
                        <GiLightningSpanner
                          style={{
                            color: "#EE228F",
                            fontSize: "30px",
                          }}
                        />
                        <p className="font-css">Utilities</p>
                        <h3>₹ {getAmountByCategory(expence, "utilities")}</h3>
                      </div>{" "}
                      <input
                        type="range"
                        style={{
                          boxShadow: "1px 1px 1px #EE228F",
                          border: "2px solid #EE228F",
                        }}
                        className="range-input"
                        value={getAmountByCategory(expence, "utilities")}
                        name="vol"
                        min="0"
                        max={totalexpence}
                      ></input>
                    </div>
                  </div>
                </div>
              )}
              {income.length !== 0 && (
                <div>
                  <h2>Total Income: ₹{totalincome} </h2>
                  <div>
                    <div>
                      <div className="flex-center-align">
                        <FaHome
                          style={{
                            color: "#00aa00",
                            fontSize: "30px",
                          }}
                        />
                        <p className="font-css">Home</p>
                        <h3>₹ {getAmountPaymentSource(income, "home")}</h3>
                      </div>
                      <input
                        type="range"
                        style={{
                          boxShadow: "1px 1px 1px #00aa00",
                          border: "2px solid #83e584",
                        }}
                        className="range-input"
                        value={getAmountPaymentSource(income, "home")}
                        name="vol"
                        min="0"
                        max={totalincome}
                      ></input>
                    </div>
                    <div>
                      <div className="flex-center-align">
                        {" "}
                        <BsPersonWorkspace
                          style={{
                            color: "#009EE1",
                            fontSize: "30px",
                          }}
                        />
                        <p className="font-css">Job</p>{" "}
                        <h3>₹ {getAmountPaymentSource(income, "Job")}</h3>
                      </div>{" "}
                      <input
                        type="range"
                        style={{
                          boxShadow: "1px 1px 1px #009EE1",
                          border: "2px solid #009EE1",
                        }}
                        className="range-input"
                        value={getAmountPaymentSource(income, "Job")}
                        name="vol"
                        min="0"
                        max={totalincome}
                      ></input>{" "}
                    </div>
                    <div>
                      <div className="flex-center-align">
                        {" "}
                        <SlOptions
                          style={{
                            color: "orange",

                            fontSize: "30px",
                          }}
                        />
                        <p className="font-css">Others</p>
                        <h3>₹ {getAmountPaymentSource(income, "other")}</h3>
                      </div>{" "}
                      <input
                        type="range"
                        style={{
                          boxShadow: "1px 1px 1px orange",
                          border: "2px solid orange",
                        }}
                        className="range-input"
                        value={getAmountPaymentSource(income, "other")}
                        name="vol"
                        min="0"
                        max={totalincome}
                      ></input>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

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
