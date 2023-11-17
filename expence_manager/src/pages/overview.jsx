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

const Overview = () => {
  const { userData } = useContext(AuthContext);
  const [income, setIncome] = useState([]);
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
  }, [refresh]);
  return (
    <>
      <div className="main-container">
        <div>
          {" "}
          <p className="graph-title">
            Graphical representation Of Expense <span>By Category</span>
          </p>
          <div>
            <Doughnut data={expenceData} />
          </div>
        </div>
        <div>
          <p className="graph-title">
            Graphical representation Of Income <span>By Paymentsource</span>
          </p>
          <div>
            <Pie data={incomeData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
