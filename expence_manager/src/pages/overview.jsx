import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext, useEffect, useState } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import axios from "axios";
import "../css/overview.css";
import { AuthContext } from "../context/AuthContext";
ChartJS.register(ArcElement, Tooltip, Legend);

function getAmountPaymentSource(array, paymentSource) {
  const result = array.filter((item) => item.paymentSource === paymentSource);

  const totalAmount = result.reduce((sum, item) => sum + item.amount, 0);

  return totalAmount;
}
function getAmountByCategory(array, category) {
  const result = array.filter((item) => item.category === category);

  const totalAmount = result.reduce((sum, item) => sum + item.amount, 0);

  return totalAmount;
}
const getDate = (date) => {
  date = date.split("T");

  return date[0];
};
const Overview = () => {
  const { userData } = useContext(AuthContext);
  const [income, setIncome] = useState([]);
  const [resentExpence, setResentExpence] = useState([]);
  const [resentIncome, setResentIncome] = useState([]);
  const [expence, setExpence] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
  const getResentDataExpence = () => {
    axios(`http://localhost:4500/expense/sortbyDate/DESC`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: userData.token,
      },
    })
      .then((res) => setResentExpence(res.data))
      .catch((err) => console.error(err));
  };
  const getResentDataIncome = () => {
    axios(`http://localhost:4500/income/sortbyDate/DESC`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: userData.token,
      },
    })
      .then((res) => setResentIncome(res.data))
      .catch((err) => console.error(err));
  };
  const expenceData = {
    labels: [
      "Food and Drinks",
      "Leisure",
      "Transportation",
      "Health",
      "Shooping",
      "Utilities",
    ],
    datasets: [
      {
        label: "Expense by Category",
        data: [
          getAmountByCategory(expence, "food&drinks"),
          getAmountByCategory(expence, "leisure"),
          getAmountByCategory(expence, "transportation"),
          getAmountByCategory(expence, "health"),
          getAmountByCategory(expence, "shooping"),
          getAmountByCategory(expence, "utilities"),
        ],
        backgroundColor: [
          "#0BC80E",
          "#029ADC",
          "#F6A004",
          "#F50204",
          "#C614C6",
          "#E8238D",
        ],

        borderWidth: 2,
        hoverOffset: 5,
      },
    ],
  };
  const incomeData = {
    labels: ["Home", "Job", "Other"],
    datasets: [
      {
        label: "Income by PaymentSource",
        data: [
          getAmountPaymentSource(income, "home"),
          getAmountPaymentSource(income, "Job"),
          getAmountPaymentSource(income, "other"),
        ],
        borderWidth: 2,
        width: 100,
        backgroundColor: ["#0BC80E", "#029ADC", "#F50204"],
        hoverOffset: 5,
      },
    ],
  };

  useEffect(() => {
    getdataExpence();
    getdataIncome();
    getResentDataExpence();
    getResentDataIncome();
  }, [refresh]);

  return (
    <>
      {" "}
      {income.length == 0 && expence.length == 0 && (
        <img
          className="no-transaction-img"
          src="https://i.pinimg.com/originals/ce/a0/0d/cea00d5472fb477c9d2bf8724fac768d.jpg"
          alt="No Transactions Found"
        />
      )}
      <div className="main-container">
        {expence.length !== 0 && (
          <div>
            {" "}
            <p className="graph-title">
              Graphical representation Of Expense <span>By Category</span>
            </p>
            <div>
              <Doughnut data={expenceData} />
            </div>
          </div>
        )}
        {income.length !== 0 && (
          <div>
            <p className="graph-title">
              Graphical representation Of Income <span>By Paymentsource</span>
            </p>
            <div>
              <Pie data={incomeData} />
            </div>
          </div>
        )}
      </div>
      <div className="table-container">
        <h2>Last Transactions of Expense</h2>
        {expence.length !== 0 && (
          <table className="table">
            <thead className="table-head">
              <th>Sr.NO</th>
              <th>Amount (in rs.)</th>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
            </thead>
            <tbody>
              {resentExpence?.map((el, index) => {
                return (
                  <tr key={el.id}>
                    <td>{index + 1}</td>
                    <td>{el.amount}</td>
                    <td>{getDate(el.date)}</td>
                    <td>{el.category}</td>
                    <td>{el.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {expence.length == 0 && <h3>No Expence Transaction Found!</h3>}
      </div>
      <div className="table-container">
        <h2>Last Transactions of Income</h2>
        {income.length !== 0 && (
          <table className="table">
            <thead className="table-head">
              <th>Sr.NO</th>
              <th>Amount (in rs.)</th>
              <th>Date</th>
              <th>PaymentSource</th>
              <th>ReceivedBy</th>
              <th>Description</th>
            </thead>
            <tbody>
              {resentIncome?.map((el, index) => {
                return (
                  <tr key={el.id}>
                    <td>{index + 1}</td>
                    <td>{el.amount}</td>
                    <td>{getDate(el.date)}</td>
                    <td>{el.paymentSource}</td>
                    <td>{el.receivedBy.toUpperCase()}</td>
                    <td>{el.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {income.length == 0 && <h3>No Income Transaction Found!</h3>}
      </div>
    </>
  );
};

export default Overview;
