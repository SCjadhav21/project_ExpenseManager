import React, { useContext, useState } from "react";

import { FaCcVisa, FaHome, FaRupeeSign } from "react-icons/fa";
import {
  MdOutlineCreditScore,
  MdSpeakerNotes,
  MdDateRange,
} from "react-icons/md";
import { BsPersonWorkspace, BsCheckCircleFill } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";

import { AuthContext } from "../context/AuthContext";
import { addIncome } from "../components/api";

import "../css/manageIncome.css";
const ManageIncome = ({
  manageIncome,
  refresh,
  setRefresh,
  setManageIncome,
}) => {
  const { userData } = useContext(AuthContext);
  const [data, setData] = useState({
    amount: "",
    receivedBy: "",
    paymentSource: "",
    date: "",
    description: "",
  });

  const handelChange = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") {
      value = +value;
    }
    setData({ ...data, [name]: value });
  };
  const handelReceivedBy = (value) => {
    setData({ ...data, receivedBy: value });
  };
  const handelPaymentSource = (value) => {
    setData({ ...data, paymentSource: value });
  };
  const handelSubmit = () => {
    if (data.amount == "") {
      alert("Please enter some amount");
    } else if (data.receivedBy == "") {
      alert("Please select a payment received method");
    } else if (data.paymentSource == "") {
      alert("Please select a payment source");
    } else if (data.date == "") {
      alert("Please select a date");
    } else if (data.description == "") {
      alert("Please Add some description");
    } else {
      addIncome(data, userData.token)
        .then((res) => {
          if (res.status == 201) {
            alert("Income Added successfully!");
            setRefresh(!refresh);
            setManageIncome(!manageIncome);
          } else {
            alert("Error while creating income");
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err.message);
        });
    }
  };
  return (
    <div>
      <div className="flex-container">
        <h3 className="fontcss">Amount :</h3>
        <input
          min={1}
          name="amount"
          onChange={handelChange}
          value={data.amount}
          className="amountInput"
          type="number"
        />
        <h3 style={{ fontSize: "40px" }}>₹</h3>
      </div>
      <div>
        <h3 className="fontcss">Payment Received By</h3>
        <div className="category-grid">
          <div
            onClick={() => handelReceivedBy("credit")}
            style={{
              color: data.receivedBy == "credit" ? "white" : "black",
              backgroundColor:
                data.receivedBy == "credit" ? "#07DA06" : "white",
            }}
            className="category-grid-item"
          >
            <MdOutlineCreditScore
              className="icon-font-size"
              style={{
                color: data.receivedBy == "credit" ? "white" : "#07DA06",
              }}
            />
            <p>Credit Card</p>
          </div>
          <div
            onClick={() => handelReceivedBy("debit")}
            style={{
              color: data.receivedBy == "debit" ? "white" : "black",
              backgroundColor: data.receivedBy == "debit" ? "#009EE1" : "white",
            }}
            className="category-grid-item"
          >
            <FaCcVisa
              className="icon-font-size"
              style={{
                color: data.receivedBy == "debit" ? "white" : "#009EE1",
              }}
            />
            <p>Debit Card</p>
          </div>
          <div
            onClick={() => handelReceivedBy("cash")}
            style={{
              color: data.receivedBy == "cash" ? "white" : "black",
              backgroundColor: data.receivedBy == "cash" ? "orange" : "white",
            }}
            className="category-grid-item"
          >
            <FaRupeeSign
              className="icon-font-size"
              style={{
                color: data.receivedBy == "cash" ? "white" : "orange",
              }}
            />
            <p>Cash</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="fontcss">Payment Source</h3>
        <div className="category-grid">
          <div
            onClick={() => handelPaymentSource("Job")}
            style={{
              color: data.paymentSource == "Job" ? "white" : "black",
              backgroundColor: data.paymentSource == "Job" ? "red" : "white",
            }}
            className="category-grid-item"
          >
            <BsPersonWorkspace
              className="icon-font-size"
              style={{
                color: data.paymentSource == "Job" ? "white" : "red",
              }}
            />
            <p>Job</p>
          </div>
          <div
            onClick={() => handelPaymentSource("home")}
            style={{
              color: data.paymentSource == "home" ? "white" : "black",
              backgroundColor:
                data.paymentSource == "home" ? "#CA13C9" : "white",
            }}
            className="category-grid-item"
          >
            <FaHome
              className="icon-font-size"
              style={{
                color: data.paymentSource == "home" ? "white" : "#CA13C9",
              }}
            />

            <p>Home</p>
          </div>
          <div
            onClick={() => handelPaymentSource("other")}
            style={{
              color: data.paymentSource == "other" ? "white" : "black",
              backgroundColor:
                data.paymentSource == "other" ? "#EE228F" : "white",
            }}
            className="category-grid-item"
          >
            <SlOptions
              className="icon-font-size"
              style={{
                color: data.paymentSource == "other" ? "white" : "#EE228F",
              }}
            />

            <p>Other</p>
          </div>
        </div>
      </div>
      <h3 className="fontcss">details</h3>
      <div className="flex-container">
        <div style={{ width: "80%" }}>
          <div className="flex-container">
            <MdDateRange
              className="icon-font-size"
              style={{ color: "#9400F7", marginLeft: "5px" }}
            />
            <input
              onChange={handelChange}
              style={{ margin: "5px" }}
              type="date"
              name="date"
              value={data.date}
            />
          </div>
          <div className="flex-container">
            <MdSpeakerNotes
              className="icon-font-size"
              style={{ color: "#8C00E9", marginLeft: "5px" }}
            />
            <input
              onChange={handelChange}
              value={data.description}
              style={{ marginTop: "5px" }}
              type="text"
              placeholder="Add note here..."
              name="description"
            />
          </div>
        </div>
        <BsCheckCircleFill onClick={handelSubmit} className="check-icon" />
      </div>
    </div>
  );
};

export default ManageIncome;
